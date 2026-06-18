import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, join, resolve } from "node:path";

const docsDir = resolve("docs");
const placeholderPatterns = [
  /^\s*description:\s*DESC\s*$/im,
  /^\s*tagline:\s*TAGLINE\s*$/im,
  /\bLorem ipsum\b/i,
  /\bA VitePress Site\b/i,
];
const markdownLinkPattern = /!?\[[^\]]*]\((?!https?:|mailto:|#)([^)\s]+)(?:\s+"[^"]*")?\)/g;
const errors = [];

function walk(directory, predicate = () => true) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name.startsWith(".") || entry.name === "node_modules") {
      return [];
    }

    const filePath = join(directory, entry.name);

    if (entry.isDirectory()) {
      return walk(filePath, predicate);
    }

    return predicate(filePath) ? [filePath] : [];
  });
}

function withoutHashOrQuery(link) {
  return link.split("#")[0].split("?")[0];
}

function candidateMarkdownPaths(baseDirectory, link) {
  const cleanLink = withoutHashOrQuery(link);

  if (!cleanLink) {
    return [];
  }

  const target = cleanLink.startsWith("/") ? join(docsDir, cleanLink) : join(baseDirectory, cleanLink);

  if (extname(target)) {
    return [target];
  }

  return [`${target}.md`, join(target, "index.md")];
}

function assertLocalLink(fromFile, link) {
  const candidates = candidateMarkdownPaths(dirname(fromFile), link);

  if (candidates.length > 0 && !candidates.some((candidate) => existsSync(candidate))) {
    errors.push(`${fromFile}: broken local link "${link}"`);
  }
}

function checkMarkdown(filePath) {
  const content = readFileSync(filePath, "utf-8");

  if (placeholderPatterns.some((pattern) => pattern.test(content))) {
    errors.push(`${filePath}: contains placeholder copy`);
  }

  for (const match of content.matchAll(markdownLinkPattern)) {
    assertLocalLink(filePath, decodeURIComponent(match[1]));
  }
}

function checkSidebarItem(sidebarPath, item) {
  if (item.link && !/^https?:/.test(item.link)) {
    assertLocalLink(sidebarPath, item.link);
  }

  if (Array.isArray(item.items)) {
    if (item.items.length === 0) {
      errors.push(`${sidebarPath}: "${item.text ?? "Untitled"}" has an empty items array`);
    }

    item.items.forEach((child) => checkSidebarItem(sidebarPath, child));
  }
}

function checkSidebar(sidebarPath) {
  const items = JSON.parse(readFileSync(sidebarPath, "utf-8"));

  if (!Array.isArray(items)) {
    errors.push(`${sidebarPath}: sidebar must be a JSON array`);
    return;
  }

  items.forEach((item) => checkSidebarItem(sidebarPath, item));
}

for (const filePath of walk(docsDir, (file) => file.endsWith(".md"))) {
  checkMarkdown(filePath);
}

for (const filePath of walk(docsDir, (file) => file.endsWith("sidebar.json"))) {
  checkSidebar(filePath);
}

for (const filePath of walk(docsDir, (file) => file.endsWith(".md"))) {
  const stats = statSync(filePath);
  if (!stats.isFile()) {
    errors.push(`${filePath}: expected a regular file`);
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Docs structure looks good.");

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

import type { DefaultTheme } from "vitepress";

import { addons } from "./addons";

const docsDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sidebarFileName = "sidebar.json";

function findSidebarFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
    .flatMap((entry) => {
      const directoryPath = join(directory, entry.name);
      const sidebarPath = join(directoryPath, sidebarFileName);
      const nestedSidebars = findSidebarFiles(directoryPath);

      return existsSync(sidebarPath) ? [sidebarPath, ...nestedSidebars] : nestedSidebars;
    });
}

function loadSidebarItems(sidebarPath: string, route: string): DefaultTheme.SidebarItem[] {
  const items = JSON.parse(readFileSync(sidebarPath, "utf-8"));

  if (!Array.isArray(items)) {
    throw new Error(`${sidebarPath} must contain a JSON array.`);
  }

  const addon = addons.find((item) => item.link === route);
  if (addon && items[0]?.items && Array.isArray(items[0].items)) {
    return [
      {
        ...items[0],
        items: [{ text: "Download", link: addon.downloadUrl }, ...items[0].items],
      },
      ...items.slice(1),
    ];
  }

  return items;
}

const addonSidebars = Object.fromEntries(
  findSidebarFiles(docsDir)
    .sort()
    .map((sidebarPath) => {
      const directory = dirname(sidebarPath);
      const route = `/${relative(docsDir, directory).split(sep).join("/")}/`;

      return [route, loadSidebarItems(sidebarPath, route)];
    }),
);

export const sidebar: DefaultTheme.Sidebar = {
  "/": [
    {
      text: "Add-ons",
      items: addons.map(({ title, link }) => ({ text: title, link })),
    },
  ],
  ...addonSidebars,
};

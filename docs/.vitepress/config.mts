import { defineConfig, type HeadConfig } from "vitepress";

import { nav } from "./nav";
import { sidebar } from "./sidebar";

const year = new Date().getFullYear();
const siteUrl = "https://mcaddon.dev";

interface HeroImageFrontmatter {
  hero?: {
    image?: {
      alt?: string;
      src?: string;
    };
    name?: string;
  };
}

function absoluteSiteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

function heroImageHead(frontmatter: HeroImageFrontmatter): HeadConfig[] {
  const image = frontmatter.hero?.image;

  if (!image?.src) {
    return [];
  }

  const imageUrl = absoluteSiteUrl(image.src);
  const imageAlt = image.alt ?? (frontmatter.hero?.name ? `${frontmatter.hero.name} hero image` : "Page hero image");

  return [
    ["meta", { property: "og:image", content: imageUrl }],
    ["meta", { property: "og:image:alt", content: imageAlt }],
    ["meta", { property: "twitter:image", content: imageUrl }],
  ];
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "mcaddon.dev",
  description: "Script events, compatibility tags, and examples for Marketplace add-ons.",
  head: [
    // Favicons
    ["link", { rel: "icon", href: "/favicon.ico", sizes: "48x48" }],
    ["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
    ["link", { rel: "icon", href: "/favicon-96x96.png", type: "image/png", sizes: "96x96" }],
    ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" }],

    // Manifest
    ["link", { rel: "manifest", href: "/site.webmanifest" }],

    // Global SEO
    ["meta", { name: "theme-color", content: "#55d947" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://mcaddon.dev/" }],
    ["meta", { property: "og:locale", content: "en" }],
    ["meta", { property: "og:image", content: "/images/logo.webp" }],

    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:url", content: "https://mcaddon.dev/" }],
    ["meta", { property: "twitter:image", content: "/images/logo.webp" }],
  ],
  cleanUrls: true,
  markdown: {
    breaks: true,
  },
  sitemap: {
    hostname: "https://mcaddon.dev/",
  },
  transformHead({ pageData }) {
    return heroImageHead(pageData.frontmatter);
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    lastUpdated: {},
    logo: { src: "/images/logo.webp", alt: "Logo" },
    footer: {
      copyright: year.toString(),
      message: "Not associated with or approved by Mojang Studios or Microsoft",
    },
    search: {
      provider: "local",
    },
    editLink: {
      pattern: "https://github.com/mcaddon-sites/dev/edit/main/docs/:path",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/mcaddon-sites" }],
  },
});

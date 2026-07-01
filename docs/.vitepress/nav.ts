import type { DefaultTheme } from "vitepress";

import { addons } from "./addons";

export const nav: DefaultTheme.NavItem[] = [
  {
    text: "Add-On Registry",
    link: "https://github.com/Bedrock-OSS/add-on-registry",
  },
  {
    text: "Contribute",
    link: "./contribute",
  },
  {
    text: "Add-ons",
    items: addons.map(({ title, link }) => ({ text: title, link })),
  },
];

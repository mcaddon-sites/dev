import type { DefaultTheme } from "vitepress";

import { addons } from "./addons";

export const nav: DefaultTheme.NavItem[] = [
  {
    text: "Add-ons",
    items: addons.map(({ title, link }) => ({ text: title, link })),
  },
];

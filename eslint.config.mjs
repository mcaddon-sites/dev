import js from "@eslint/js";
import md from "@eslint/markdown";
import globals from "globals";
import vue from "eslint-plugin-vue";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2023,
      },
    },
  },

  ...vue.configs["flat/recommended"],

  {
    files: ["**/*.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/no-v-html": "off",
    },
  },

  // ✅ Markdown (spread as-is)
  ...md.configs.recommended,
  {
    files: ["**/*.md"],
    rules: {
      // Disable all Vue rules
      ...Object.fromEntries(Object.keys(vue.rules).map((rule) => [`vue/${rule}`, "off"])),
      "markdown/no-missing-label-refs": "off",
      "no-irregular-whitespace": "off",
      "no-unused-expressions": "off",
      "no-undef": "off",
      "no-redeclare": "off",
    },
  },

  {
    ignores: ["node_modules/", "dist/", "docs/.vitepress/cache/", "docs/.vitepress/dist/"],
  },

  prettier,
];

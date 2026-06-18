import DefaultTheme from "vitepress/theme";

import AddonDocsIndex from "./components/AddonDocsIndex.vue";
import AddonIndex from "./components/AddonIndex.vue";
import "./style.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("AddonDocsIndex", AddonDocsIndex);
    app.component("AddonIndex", AddonIndex);
  },
};

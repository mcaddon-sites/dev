<script setup>
import { computed } from "vue";

import { addons } from "../../addons";

const props = defineProps({
  namespace: {
    type: String,
    required: true,
  },
});

const addon = computed(() => addons.find((item) => item.namespace === props.namespace));
</script>

<template>
  <section v-if="addon" class="addon-docs-index" aria-labelledby="addon-docs-title">
    <div class="addon-docs-index__intro">
      <div>
        <p class="addon-docs-index__eyebrow">Namespace</p>
        <code>{{ addon.namespace }}</code>
      </div>
      <a class="addon-docs-index__download" :href="addon.downloadUrl">Download from Marketplace</a>
    </div>

    <div class="addon-docs-index__header">
      <h2 id="addon-docs-title">Documentation</h2>
      <p>{{ addon.description }}</p>
    </div>

    <div class="addon-docs-index__grid">
      <a v-for="doc in addon.docs" :key="doc.link" class="addon-doc-card" :href="doc.link">
        <span class="addon-doc-card__title">{{ doc.title }}</span>
        <span class="addon-doc-card__description">{{ doc.description }}</span>
      </a>
    </div>
  </section>
</template>

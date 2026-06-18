<script setup lang="ts">
import { addons } from "../../addons";
</script>

<template>
  <section id="add-ons" class="addon-index" aria-labelledby="addon-index-title">
    <div class="addon-index__header">
      <h2 id="addon-index-title">Add-ons</h2>
      <p>Pick an add-on to browse integration notes, script events, tags, and examples.</p>
    </div>

    <div class="addon-index__grid">
      <article v-for="addon in addons" :key="addon.namespace" class="addon-card">
        <img class="addon-card__image" :src="addon.imageSrc" :alt="`${addon.title} thumbnail`" loading="lazy" />
        <div class="addon-card__body">
          <div>
            <h3>{{ addon.title }}</h3>
            <code>{{ addon.namespace }}</code>
          </div>
          <p>{{ addon.description }}</p>
          <div class="addon-card__actions">
            <a class="addon-card__link addon-card__link--primary" :href="addon.link">Docs</a>
            <a class="addon-card__link" :href="addon.downloadUrl">Download</a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

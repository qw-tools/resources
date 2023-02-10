<script setup lang="ts">
import type { Item } from "../types";

import { getIconUrlByUrl, getLogoUrlByTitle, hasPublicFile } from "../util";

interface Props {
  item: Item;
}

const props = defineProps<Props>();
const { title, url, description = "", slogan = "", related = [] } = props.item;

const logoUrl = getLogoUrlByTitle(title);
const hasVendorLogo = hasPublicFile(logoUrl);
const imgUrl = hasVendorLogo ? logoUrl : getIconUrlByUrl(url);
const imgSize = hasVendorLogo ? 24 : 24;
</script>

<template>
  <div>
    <div class="p-2 border border-white/10">
      <a :href="url">
        <img :src="imgUrl" :width="imgSize" class="inline m-0 mr-2" />
        <span class="font-bold">{{ title }}</span>
        <span v-if="slogan" class="text-white/50 underline-0">
          - {{ slogan }}</span
        >
        <span v-if="description && !slogan" class="text-white/50 text-sm">
          - {{ description }}</span
        >
      </a>

      <span v-if="related.length" class="ml-8 space-x-4">
        <a
          v-for="related_url in related"
          :href="related_url"
          class="grayscale hover:grayscale-0"
        >
          <img
            :src="getIconUrlByUrl(related_url)"
            width="16"
            height="16"
            class="inline m-0"
          />
        </a>
      </span>

      <div v-if="slogan && description" class="text-sm text-white/50 py-2">
        {{ description }}
      </div>
    </div>
  </div>
</template>

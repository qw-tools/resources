<script setup lang="ts">
import type { Item } from "@/types";

import { getIconUrlByUrl, getLogoUrl } from "@/util";

interface Props {
  item: Item;
}

const props = defineProps<Props>();
const imgUrl = props.item.logo
  ? getLogoUrl(props.item.logo)
  : getIconUrlByUrl(props.item.url);
const imgSize = 24;
</script>

<template>
  <div>
    <div class="flex items-center">
      <a
        :href="props.item.url"
        class="p-3 hover:bg-sky-100 grow transition-colors"
      >
        <img
          :src="imgUrl"
          :width="imgSize"
          class="inline m-0 mr-2"
          :alt="props.item.title"
        />
        <span class="font-bold">{{ props.item.title }}</span>
        <div v-if="props.item.slogan" class="text-gray-700 text-sm mt-1">
          {{ props.item.slogan }}
        </div>
      </a>

      <div
        v-if="props.item.related.length"
        class="ml-auto px-1 flex items-center"
      >
        <a
          v-for="related_url in props.item.related"
          :key="related_url"
          :href="related_url"
          class="bg-white/5 p-2 rounded-full grayscale hover:grayscale-0 border hover:bg-sky-100 hover:border-sky-200 ml-2 transition-colors"
        >
          <img
            :src="getIconUrlByUrl(related_url)"
            width="16"
            height="16"
            alt=""
            style="min-width: 16px; min-height: 16px"
          />
        </a>
      </div>
    </div>
    <div
      v-if="props.item.description"
      class="text-gray-700 text-sm px-2 pb-3 -mt-1"
    >
      {{ props.item.description }}
    </div>
  </div>
</template>

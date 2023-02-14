<script setup lang="ts">
import type { Item } from "@/types";

import { getIconUrlByUrl, getLogoUrl } from "@/util";

interface Props {
  item: Item;
}

const props = defineProps<Props>();
const { title, url, description = "", slogan = "", logo = "", related = [] } = props.item;

const imgUrl = logo ? getLogoUrl(logo) : getIconUrlByUrl(url);
const imgSize = 24;
</script>

<template>
  <div>
    <div class="flex items-center ">
      <a :href="url" class="px-2 py-3 hover:bg-white/10 grow transition-colors">
        <img :src="imgUrl" :width="imgSize" class="inline m-0 mr-2" :alt={title} />
        <span class="font-bold">{{ title }}</span>
        <div v-if="slogan" class="text-white/70 text-sm mt-1">{{ slogan }}</div>
      </a>

      <div v-if="related.length" class="ml-auto px-1 flex items-center">
        <a
            v-for="related_url in related"
            :href="related_url"
            class="bg-white/5 p-2 rounded-full grayscale hover:grayscale-0 border border-white/5 hover:bg-blue-400/20 hover:border-blue-400/10 ml-2 transition-colors"
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
    <div v-if="description" class="text-white/50 text-sm px-2 pb-3 -mt-1">
      {{ description }}
    </div>
  </div>
</template>

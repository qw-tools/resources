<script setup lang="ts">

import { items } from "@/data/items";
import { toItemCollections } from "@/util";
import ItemLink from "@/components/ItemLink.vue";
import { ref, watch } from "vue";
import type { Item, ItemCollection } from "@/types";

let query = ref('');
let collections: ref<ItemCollection[]> = ref([]);

function itemToKeywordString(item: Item): string {
  return (item.tags ?? []).concat([item.title, item.category.title]).join(" ").toLowerCase();
}

function onQueryChange(query: string): void {
  const filteredItems = items.filter(i => itemToKeywordString(i).includes(query.toLowerCase()));
  collections = toItemCollections(filteredItems);
}

function onClearQuery(): void {
  query.value = "";
}

watch(query, onQueryChange, { immediate: true });

</script>

<template>

  <div class="pt-1 pb-4 sm:flex sm:space-x-4 sm:items-center">
    <h1 class="font-bold text-lg my-3 w-64">QuakeWorld Resources</h1>
    <div class="grow">
      <input type="search" class="p-2 dark:bg-white/10 rounded-md w-full" placeholder="filter" v-model="query" />
    </div>
  </div>

  <div class="space-y-4">

    <div v-for="c in collections">
      <div class="font-bold text-xl py-2 pl-4 border-l-4 border-l-purple-400 bg-purple-400/10 flex">
        {{ c.category.title }} ({{ c.items.length }})
      </div>
      <div class="py-2 divide-y divide-white/10 md:divide-y-0 md:grid md:gap-x-14 md:grid-cols-2 xl:grid-cols-4">
        <ItemLink v-for="i in c.items" :key="i.title" :item="i" />
      </div>
    </div>

    <div v-if="0 === collections.length" class="space-x-4">
      <span>nothing found :(</span> <button class="bg-gray-700 rounded shadow text-sm font-mono px-2 py-1" @click="onClearQuery">reset filter</button>
    </div>

  </div>

</template>

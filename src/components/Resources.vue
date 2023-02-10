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

watch(query, onQueryChange, { immediate: true });

</script>

<template>

  <div class="space-y-4">

    <input type="search" class="p-2 dark:bg-white/10 w-full rounded-md" placeholder="filter" v-model="query" />

    <div v-for="c in collections">
      <div class="font-bold text-2xl py-2 pl-4 border-l-4 border-l-purple-400 bg-purple-400/10 flex">
        {{ c.category.title }} ({{ c.items.length }})
      </div>
      <div class="py-2">
        <ItemLink v-for="i in c.items" :key="i.title" :item="i" />
      </div>
    </div>

  </div>

</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { ItemCollection, ItemToKeyword } from "@/types";
import { items } from "@/data/items";
import { toItemCollections } from "@/util";
import ItemLink from "@/components/ItemLink.vue";

let query = ref("");
let collections: ItemCollection[] = [];

function onQueryInputChange(event: Event) {
  query.value = (event.target as HTMLInputElement).value;
}

function onQueryChange(query: string): void {
  const lcQuery = query.toLowerCase();
  const filteredItems = items.filter((i) => ItemToKeyword(i).includes(lcQuery));
  collections = toItemCollections(filteredItems);
}

function onClearQuery(): void {
  query.value = "";
}

watch(query, onQueryChange, { immediate: true });
</script>

<template>
  <div class="bg-white drop-shadow">
    <div class="container flex items-center h-16">
      <h1 class="font-bold text-xl mr-6">Resources</h1>
      <div class="grow max-w-xs">
        <input
          type="search"
          class="p-2 bg-gray-100 w-full rounded-md shadow border border-gray-300 text-sm focus:bg-sky-50 focus:border-sky-600 focus:outline-0"
          placeholder="filter"
          :value="query"
          @input="onQueryInputChange"
          autofocus
        />
      </div>
    </div>
  </div>

  <div class="py-4">
    <div class="container space-y-6">
      <div v-for="c in collections" :key="c.category.title">
        <div
          class="font-bold text-xl py-2 pl-4 border-l-4 border-l-purple-400 bg-purple-100"
        >
          {{ c.category.title }} ({{ c.items.length }})
        </div>
        <div
          class="py-2 divide-y md:divide-y-0 md:grid md:gap-x-14 md:grid-cols-2 xl:grid-cols-4"
        >
          <ItemLink v-for="i in c.items" :key="i.title" :item="i" />
        </div>
      </div>

      <div v-if="0 === collections.length" class="space-x-4 my-6">
        <span>nothing found :(</span>
        <button
          class="bg-gray-100 rounded border shadow text-sm font-mono px-2 py-1 hover:bg-gray-50"
          @click="onClearQuery"
        >
          reset filter
        </button>
      </div>
    </div>
  </div>
</template>

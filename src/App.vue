<script setup lang="ts">
import Resources from "@/components/Resources.vue";
import SiteHeader from "@/Site/SiteHeader.vue";
import SiteFooter from "@/Site/SiteFooter.vue";
</script>

<template>
  <SiteHeader current-app="resources" />
  <div class="container">
    <Resources />
  </div>
  <SiteFooter />
</template>

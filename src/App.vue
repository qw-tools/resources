<script setup lang="ts">
import Resources from "@/components/ResourcessPage.vue";
import SiteHeader from "@/Site/SiteHeader.vue";
import SiteFooter from "@/Site/SiteFooter.vue";
</script>

<template>
  <SiteHeader current-app="resources" />
  <Resources />
  <SiteFooter />
</template>

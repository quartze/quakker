<template>
  <div>
    <div class="kk-tabs">
      <Tabs :tabs="tabs" v-model="currentTab" />
    </div>
    <div class="kk-tags">
      <InputsSearch v-model="searchInput" class="w-full lg:hidden" />
      <h2>Popularne dla ciebie</h2>
      <PostTags :categories="['Najpopularniejsze']" :tag="'Warszawa'" :position="1" :count="24024" />
      <PostTags :categories="['Najpopularniejsze']" tag="#wwa" :position="2" :count="24024" />
      <PostTags
        :categories="['Najpopularniejsze']"
        :tag="'Poznań'"
        :position="3"
        :count="10429523" />
      <PostTags
        :categories="['Najpopularniejsze']"
        :tag="'Wołów'"
        :position="4"
        :count="10429523" />
      <PostTags
        :categories="['Najpopularniejsze']"
        :tag="'#wlw'"
        :position="5"
        :count="10429523" />
      <PostTags
        :categories="['Najpopularniejsze']"
        :tag="'#lbz'"
        :position="6"
        :count="10429523" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { ITabsPropsTabs } from "~/types/components";

  const queries = useRoute().query;

  const searchInput = ref(queries.s ? queries.s.toString() : "");

  const tabs: ITabsPropsTabs[] = [
    {
      label: "Dla ciebie",
      value: 0,
    },
    {
      label: "Popularne",
      value: 1,
    },
    {
      label: "Promowane",
      value: 2,
    },
  ];
  const currentTab = ref(0);

  definePageMeta({
    layout: "default",
  });

  useHead({
    title: "Przeglądaj - Quakker",
  });
</script>

<style scoped>
  .kk-tags {
    @apply p-8 border-t border-t-slate-800;
  }
</style>

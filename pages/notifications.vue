<template>
  <div>
    <Tabs :tabs="tabs" v-model="currentTab" />
    <div class="kk-notifies-all">
      <NotifyBlock
        :type="INotifyBlockType.LIKED"
        :user="{
          id: 'test',
          username: 'yuyu',
          displayname: 'yuyukofu',
          avatarUrl: '/assets/img/avatars/11.webp',
        }"
        :content="'yes'" />
      <NotifyBlock
        :type="INotifyBlockType.COMMENTED"
        :user="{
          id: 'test',
          username: 'yuyu',
          displayname: 'yuyukofu',
          avatarUrl: '/assets/img/avatars/11.webp',
        }"
        :reply="'awesomestar'"
        :content="'yes'" />
      <NotifyBlock
        :type="INotifyBlockType.PROPOSITION"
        :user="{
          id: 'test',
          username: 'yuyu',
          displayname: 'yuyukofu',
          avatarUrl: '/assets/img/avatars/11.webp',
        }"
        :content="'yes'" />
      <NotifyBlock
        :type="INotifyBlockType.MENTIONED"
        :user="{
          id: 'test',
          username: 'yuyu',
          displayname: 'yuyukofu',
          avatarUrl: '/assets/img/avatars/11.webp',
        }"
        :content="'yes'" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { ITabsPropsTabs } from "~/types/components";

  const tabs: ITabsPropsTabs[] = [
    {
      label: "Wszystkie",
      value: 0,
    },
    {
      label: "Wzmianki",
      value: 1,
    },
    {
      label: "Ważne",
      value: 2,
    },
  ];
  const currentTab = ref(0);

  definePageMeta({
    layout: "default",
  });

  useHead({
    title: "Powiadomienia - Quakker",
  });
</script>

<style scoped>
  .kk-posts {
    @apply lg:border-t lg:border-t-slate-800 lg:mt-4;
  }

  .kk-input-post {
    @apply hidden lg:block;
  }

  .kk-header {
    @apply border-b border-b-slate-700 z-20 sticky top-0 bg-slate-950/80 backdrop-blur-sm;
  }
</style>

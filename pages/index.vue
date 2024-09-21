<template>
  <div>
    <div class="kk-header">
      <Tabs :tabs="tabs" v-model="currentTab" />
    </div>
    <div class="kk-input-post">
      <InputsUserPost :viewSwitcher="true" />
    </div>
    <div class="kk-posts">
      <template v-for="post in dumpPosts" :key="post.id">
        <Post
          :id="post.id"
          :user="post.user"
          :content="post.content"
          :images="post.images"
          :createdAt="post.createdAt"
          :reply="post.reply"
          :status="post.status"
          :stats="post.stats" />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { IPost, ITabsPropsTabs } from "~/types/components";

  const tabs: ITabsPropsTabs[] = [
    {
      label: "Dla ciebie",
      value: 0,
    },
    {
      label: "Obserwujesz",
      value: 1,
    },
  ];
  const currentTab = ref(0);

  const dumpPosts: IPost[] = [
    {
      id: "p1",
      user: {
        id: "u1",
        username: "ageryakis_",
        displayname: "Ageriyakis",
        avatarUrl: "/assets/img/avatars/11.webp",
      },
      status: {
        shared: true,
        commented: false,
        liked: true,
      },
      images: [
        {
          id: 1,
          name: "image-1",
          type: "image",
          url: "/assets/img/posts/726-536x354.webp",
        },
        {
          id: 2,
          name: "image-2",
          type: "image",
          url: "/assets/img/posts/305-536x354.webp",
        },
      ],
      content: `I like to photo winter season! It's so much fun!!`,
      createdAt: new Date().toString(),
      stats: {
        likes: 0,
        comments: 0,
        shares: 0,
        views: 0,
      },
    },
    {
      id: "test",
      user: {
        id: "test",
        username: "🔥 SNEGOVSKI",
        displayname: "Snegovski9623",
        avatarUrl: "/assets/img/avatars/74.webp",
      },
      status: {
        liked: false,
        commented: true,
        shared: false,
      },
      images: [
        {
          id: 1,
          name: "image-1",
          type: "image",
          url: "/assets/img/posts/674-536x354.webp",
        },
      ],
      createdAt: "2022-10-10",
      stats: {
        likes: 44064,
        comments: 240,
        shares: 402,
        views: 109,
      },
    },
    {
      id: "test",
      user: {
        id: "test",
        username: "matcha",
        displayname: "Teg69420",
        avatarUrl: "/assets/img/avatars/74.webp",
      },
      status: {
        liked: true,
        shared: false,
        commented: false,
      },
      images: [
        {
          id: 1,
          name: "image-1",
          type: "video",
          url: "/assets/img/posts/ffigt.mp4",
        },
      ],
      reply: {
        id: "test",
        user: {
          id: "test",
          username: "matcha",
          displayname: "Teg69420",
          avatarUrl: "/assets/img/avatars/74.webp",
        },
        content: `The best moment to chillout! What's your best moment or what do you do?`,
        createdAt: "2022-10-10",
        images: [
          {
            id: 1,
            name: "image-1",
            type: "image",
            url: "/assets/img/posts/305-536x354.webp",
          },
        ],
      },
      createdAt: "2022-10-10",
      stats: {
        likes: 224,
        comments: 166,
        shares: 420,
        views: 99620,
      },
    },
    {
      id: "test",
      user: {
        id: "test",
        username: "aveghost359",
        displayname: "AveGhost",
        avatarUrl: "/assets/img/avatars/71.webp",
      },
      status: {
        liked: true,
        shared: false,
        commented: false,
      },
      images: [
        {
          id: 2,
          name: "ofo3",
          type: "image",
          url: "/assets/img/posts/665-536x354.webp",
        },
      ],
      content: "Programming itself is fun, but traveling is better!",
      createdAt: "09.06.2024, 17:10",
      stats: {
        likes: 995324,
        comments: 12563,
        shares: 44220,
        views: 1299620,
      },
    },
  ];

  definePageMeta({
    layout: "default",
  });

  useHead({
    title: "Wiadomości ze świata - Quakker",
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

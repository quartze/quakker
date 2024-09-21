<template>
  <div>
    <div class="kk-header">
      <Icon class="kk-back" icon="ph:arrow-left-light" @click="goBack"></Icon>
      <div class="kk-header-title">Wpis</div>
    </div>
    <div class="kk-post">
      <Post
        :id="'1234'"
        :user="postAuthor.user"
        :content="postAuthor.content"
        :images="postAuthor.images"
        :createdAt="postAuthor.createdAt"
        :reply="postAuthor.reply"
        :stats="postAuthor.stats"
        :status="postAuthor.status" />
    </div>
    <div class="kk-answer-to-post">
      <InputsUserPost placeholder="Jak odpowiesz?" buttonText="Skomentuj" :viewSwitcher="false" />
    </div>
    <div class="kk-comments-response">
      <template v-for="response in dumpResponses" :key="response.id">
        <Post
          :id="response.id"
          :user="response.user"
          :content="response.content"
          :images="response.images"
          :createdAt="response.createdAt"
          :reply="response.reply"
          :stats="response.stats"
          :status="response.status" />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Icon } from "@iconify/vue";
  import type { IPost } from "#imports";

  const router = useRouter();

  const postAuthor: IPost = {
    id: "1234",
    user: {
      id: "123",
      avatarUrl: "/assets/img/avatars/11.webp",
      displayname: "Tashuyami Sora 🌸",
      username: "httpcringegirl_",
    },
    content: "Lipsum",
    status: {
      shared: true,
      commented: false,
      liked: true,
    },
    stats: {
      comments: 0,
      shares: 0,
      likes: 0,
      views: 4024,
    },
    images: [],
    createdAt: new Date().toString(),
  };

  const dumpResponses: IPost[] = [
    {
      id: "post1",
      user: {
        id: "user1",
        displayname: "John Doe",
        username: "@john_doe",
        avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      content: "Loving the new updates on this app! 🚀 #tech",
      images: [],
      stats: { comments: 12, likes: 45, shares: 5, views: 200 },
      createdAt: "2024-09-09T10:00:00Z",
      status: { liked: true, shared: false, commented: false },
    },
    {
      id: "post2",
      user: {
        id: "user2",
        displayname: "Jane Smith",
        username: "@jane_smith",
        avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      content: "Can’t believe it’s already September! Time flies. 🍁",
      images: [],
      stats: { comments: 8, likes: 67, shares: 3, views: 150 },
      createdAt: "2024-09-09T11:30:00Z",
      status: { liked: false, shared: false, commented: false },
    },
    {
      id: "post3",
      user: {
        id: "user3",
        displayname: "Alex Johnson",
        username: "@alex_j",
        avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      content: "Just finished a 10k run and feeling amazing! 🏃‍♂️💨",
      images: [],
      stats: { comments: 5, likes: 32, shares: 1, views: 100 },
      createdAt: "2024-09-09T12:15:00Z",
      status: { liked: false, shared: true, commented: true },
    },
    {
      id: "post4",
      user: {
        id: "user4",
        displayname: "Emily Davis",
        username: "@emily_davis",
        avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      content: "Coffee and coding, the perfect combo. ☕💻",
      images: [],
      stats: { comments: 15, likes: 80, shares: 7, views: 300 },
      createdAt: "2024-09-09T13:00:00Z",
      status: { liked: true, shared: true, commented: false },
    },
    {
      id: "post5",
      user: {
        id: "user5",
        displayname: "Chris Brown",
        username: "@chris_b",
        avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      content: "Just launched my new website! Check it out. 🚀",
      images: [{ name: "img1", url: "https://via.placeholder.com/150", type: "image", id: 1 }],
      stats: { comments: 22, likes: 95, shares: 12, views: 450 },
      createdAt: "2024-09-09T14:45:00Z",
      status: { liked: false, shared: true, commented: false },
    },
    {
      id: "post6",
      user: {
        id: "user6",
        displayname: "Sophia Wilson",
        username: "@sophia_w",
        avatarUrl: "https://randomuser.me/api/portraits/women/6.jpg",
      },
      content: "Nature is the best therapy 🌲🍃 #outdoors",
      images: [{ name: "img2", url: "https://via.placeholder.com/150", type: "image", id: 1 }],
      stats: { comments: 18, likes: 78, shares: 4, views: 250 },
      createdAt: "2024-09-09T15:20:00Z",
      status: { liked: true, shared: false, commented: false },
    },
    {
      id: "post7",
      user: {
        id: "user7",
        displayname: "Liam Turner",
        username: "@liam_turner",
        avatarUrl: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      content: "Great meeting with the team today! Excited about the future. 💼",
      images: [],
      stats: { comments: 9, likes: 41, shares: 6, views: 180 },
      createdAt: "2024-09-09T16:00:00Z",
      status: { liked: false, shared: true, commented: false },
    },
    {
      id: "post8",
      user: {
        id: "user8",
        displayname: "Olivia Moore",
        username: "@olivia_m",
        avatarUrl: "https://randomuser.me/api/portraits/women/8.jpg",
      },
      content: "Just baked some fresh cookies! 🍪 Who wants some?",
      images: [{ id: 1, name: "img3", url: "https://via.placeholder.com/150", type: "image" }],
      stats: { comments: 30, likes: 120, shares: 15, views: 600 },
      createdAt: "2024-09-09T17:10:00Z",
      status: { liked: true, shared: false, commented: true },
    },
    {
      id: "post9",
      user: {
        id: "user9",
        displayname: "Noah White",
        username: "@noah_white",
        avatarUrl: "https://randomuser.me/api/portraits/men/9.jpg",
      },
      content: "Learning something new every day! 📚 #NeverStopLearning",
      images: [],
      stats: { comments: 14, likes: 60, shares: 8, views: 230 },
      createdAt: "2024-09-09T18:30:00Z",
      status: { liked: false, shared: true, commented: false },
    },
    {
      id: "post10",
      user: {
        id: "user10",
        displayname: "Ava Martinez",
        username: "@ava_martinez",
        avatarUrl: "https://randomuser.me/api/portraits/women/10.jpg",
      },
      content: "Friday night vibes 🌙✨",
      images: [{ id: 1, name: "img4", url: "https://via.placeholder.com/150", type: "image" }],
      stats: { comments: 20, likes: 90, shares: 10, views: 350 },
      createdAt: "2024-09-09T19:45:00Z",
      status: { liked: true, shared: false, commented: true },
    },
  ];

  const goBack = () => {
    router.back();
  };

  definePageMeta({
    layout: "default",
  });

  useHead({
    title: "Wpis użytkownika awesomestar - Quakker",
  });
</script>

<style scoped>
  .kk-header {
    @apply font-bold text-xl flex items-center gap-2  px-4 py-6;
  }

  .kk-input-post {
    @apply hidden lg:block;
  }

  .kk-answer-to-post {
    @apply border-b border-slate-900;
  }

  .kk-back {
    @apply cursor-pointer transition-colors hover:bg-white/10 rounded-full w-10 p-2 h-10
  }
</style>

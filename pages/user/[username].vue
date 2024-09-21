<template>
  <div>
    <div class="kk-header">
      <Icon class="kk-back" @click="goBack" icon="ph:arrow-left-light"></Icon>
      <div class="kk-header-title">
        <div class="header-displayname">Tashuyami Sora 🌸</div>
        <ClientOnly
          ><div class="header-posts">{{ formatNumber(40242) }} wpisy</div></ClientOnly
        >
      </div>
    </div>
    <div class="kk-user-presentation">
      <div class="kk-user-banner">
        <img src="/assets/img/posts/665-536x354.webp" quality="100" />
      </div>
      <div class="kk-user-underbanner">
        <div class="kk-user-avatar">
          <img src="/assets/img/avatars/57071227.webp" quality="80" format="webp" />
        </div>
        <div class="kk-user-cta">
          <Button v-if="false">Obserwuj</Button>
          <Popup>
            <template #trigger>
              <Button v-if="true">Edytuj profil</Button>
            </template>
            <template #body>
              <label class="kk-banner-edit mt-4">
                <div class="kk-banner-edit-input">
                  <input type="file" />
                  <Icon icon="material-symbols:upload" />
                </div>
                <img src="/assets/img/avatars/57071227.webp" quality="20" />
              </label>
              <label class="kk-avatar-edit">
                <div class="kk-avatar-edit-input">
                  <input type="file" />
                  <Icon icon="material-symbols:upload" />
                </div>
                <img src="/assets/img/avatars/57071227.webp" quality="20" />
              </label>

              <InputsText :max="15" class="my-4" placeholder="Nazwa użytkownika" />
              <InputsTextarea placeholder="O mnie" :max="150" />
              <InputsText :max="10" class="my-4" placeholder="Zaimki" />
              <Button>Zapisz</Button>
            </template>
          </Popup>
          <Popup>
            <template #trigger>
              <Button v-if="true">Dane konta</Button>
            </template>
            <template #body>
              <InputsText class="my-4" placeholder="Nowe hasło użytkownika" />
              <InputsText class="my-4" placeholder="Nowy adres-email" />
              <small class="my-6 text-xs block text-slate-300 max-w-96 px-1"
                >Po wypełnieniu jednego z pól, na aktualny adres E-mail przyjdzie link
                aktywacyjny.</small
              >
              <Button>Zapisz</Button>
            </template>
          </Popup>
        </div>
      </div>
      <div class="kk-user-details">
        <div class="kk-user-username-wrapper">
          <div class="displayname">
            awesomestar*
            <UserBadge :type="IUserBadgeType.ADMIN" />
          </div>
          <div class="username">@awesomestar_</div>
        </div>
        <div class="kk-user-aboutme">Stay hydrated.</div>
        <div class="kk-user-whome">
          <div class="kk-user-whome-item">
            <Icon class="text-lg" icon="ph:user" />
            <span>She/Her</span>
          </div>
          <div class="kk-user-whome-item">
            <Icon class="text-lg" icon="solar:calendar-linear" />
            <span>Dołączył/a kwiecień 2021</span>
          </div>
        </div>
        <div class="kk-user-stats">
          <div class="kk-user-stats-item">
            <span class="value">6043</span>
            <span class="label"> Obserwowanych</span>
          </div>
          <div class="kk-user-stats-item">
            <span class="value">6043</span>
            <span class="label"> Obserwujących</span>
          </div>
        </div>
      </div>
    </div>
    <div class="kk-user-tabs">
      <Tabs :tabs="tabs" :current-tab="currentTab" v-model="currentTab" />
    </div>
    <div class="kk-user-posts">
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
  import type { ITabsPropsTabs } from "#imports";
  import { Icon } from "@iconify/vue";
  import { formatNumber } from "~/helpers/numbers";

  const router = useRouter();

  const tabs: ITabsPropsTabs[] = [
    {
      label: "Wpisy",
      value: 1,
    },
    {
      label: "Odpowiedzi",
      value: 2,
    },
    {
      label: "Polubione",
      value: 3,
    },
  ];

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

  const currentTab = ref(1);

  useHead({
    title: `Profil użytkownika awesomestar - Quakker`,
  });
</script>

<style scoped>
  .kk-header {
    @apply font-bold sticky top-0 left-0 right-0 z-20 bg-slate-950/90 border-b-slate-900 border-b backdrop-blur-lg text-xl flex items-center gap-6 px-4 py-3;
  }

  .header-posts {
    @apply text-sm text-slate-500 font-normal;
  }

  .kk-user-presentation {
    @apply relative block;
  }

  .kk-user-underbanner {
    @apply p-4 flex justify-between;
  }

  .kk-user-banner img {
    @apply w-full object-cover h-72;
  }

  .kk-user-avatar {
    @apply -mt-24 relative;
  }

  .kk-user-avatar img {
    @apply rounded-full w-48 h-48 border-[10px] border-slate-950;
  }

  .kk-user-details {
    @apply px-4 pb-4;
  }

  .displayname {
    @apply text-2xl font-bold flex items-center;
  }

  .username {
    @apply text-lg text-slate-500;
  }

  .kk-username-badge {
    @apply ml-1;
  }

  .kk-user-aboutme {
    @apply text-lg my-4;
  }

  .kk-user-whome {
    @apply flex items-center text-slate-500 gap-6;
  }

  .kk-user-whome-item {
    @apply flex gap-2 items-center;
  }

  .kk-user-stats {
    @apply my-4 flex text-slate-500 gap-6;
  }

  .kk-user-stats-item .value {
    @apply text-white font-bold;
  }

  .kk-user-tabs {
    @apply border-b border-slate-700;
  }

  .kk-banner-edit {
    @apply relative flex items-center justify-center rounded-lg h-48 w-full;
  }

  .kk-avatar-edit {
    @apply relative flex -mt-16 items-center justify-center rounded-full h-28 w-28 ml-4;
  }

  .kk-avatar-edit img {
    @apply rounded-full border-4 border-slate-800 block w-28 h-28 object-cover;
  }

  .kk-banner-edit img {
    @apply rounded-lg h-48 block w-full object-cover;
  }

  .kk-avatar-edit-input {
    @apply absolute bg-slate-950/80 rounded-full flex items-center justify-center text-xl left-0 right-0 top-0 bottom-0 cursor-pointer hover:opacity-100 opacity-0 transition-opacity w-full h-full;
  }

  .kk-banner-edit-input {
    @apply absolute bg-slate-950/80 rounded-lg flex items-center justify-center text-2xl left-0 right-0 top-0 bottom-0 cursor-pointer hover:opacity-100 opacity-0 transition-opacity;
  }

  .kk-banner-edit-input input,
  .kk-avatar-edit-input input {
    @apply hidden;
  }

  .kk-user-cta {
    @apply flex gap-2 absolute top-2 right-4 sm:static;
  }

  .kk-back {
    @apply cursor-pointer transition-colors hover:bg-white/10 rounded-full w-10 p-2 h-10;
  }
</style>

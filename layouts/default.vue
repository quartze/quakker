<template>
  <div class="kk-main kk-layout-default">
    <header class="kk-sidebar-left-wrapper">
      <div class="kk-sidebar-left">
        <Sidebar />
        <div class="kk-user-short">
          <UserProfileShort
            class="kk-sidebar-short-user"
            avatar-url="/assets/img/avatars/57071227.webp"
            username="awesomestar_"
            displayname="awesome*" />
          <div class="kk-user-options">
            <ClientOnly>
              <Popper arrow>
                <Icon class="text-2xl" icon="pepicons-pencil:dots-x" />
                <template #content>
                  <div class="kk-dropdown">
                    <ul class="kk-simple-nav">
                      <li class="kk-simple-nav-item" @click="navigateTo('/auth/login')">
                        <Icon class="text-xl" icon="solar:exit-linear" />
                        <span>Wyloguj się</span>
                      </li>
                    </ul>
                  </div>
                </template>
              </Popper>
            </ClientOnly>
          </div>
        </div>
      </div>
    </header>
    <main class="kk-content">
      <slot />
    </main>
    <footer class="kk-sidebar-right">
      <div class="kk-sidebar-right-follow">
        <InputsSearch v-model="searcher" />
        <Widget title="Warci obserwowania">
          <UserProfileShort
            avatar-url="/assets/img/avatars/57071227.webp"
            displayname="awesome*"
            username="awesomestar_"
            :observe="true" />
          <UserProfileShort
            avatar-url="/assets/img/avatars/57071227.webp"
            displayname="awesome*"
            username="awesomestar_"
            :observe="true" />
          <UserProfileShort
            avatar-url="/assets/img/avatars/57071227.webp"
            displayname="awesome*"
            username="awesomestar_"
            :observe="true" />
        </Widget>
        <Widget title="Popularne dzisiaj">
          <PostTags
            :categories="['Najpopularniejsze']"
            :tag="'#wwa'"
            :position="1"
            :count="24024" />
          <PostTags
            :categories="['Najpopularniejsze']"
            tag="Warszawa"
            :position="2"
            :count="24024" />
          <PostTags
            :categories="['Najpopularniejsze']"
            :tag="'#lbz'"
            :position="3"
            :count="10429523" />
        </Widget>

        <div class="kk-links">
          <NuxtLink to="/support/terms">Zasady użytkowania</NuxtLink>
          <NuxtLink to="/support/privacy">Polityka prywatności</NuxtLink>
          <NuxtLink to="/support/cookies">Polityka dotycząca plików cookie</NuxtLink>
          <NuxtLink to="#">Wsparcie</NuxtLink>

          <ClientOnly>
            <Popper arrow>
              <a href="#">Wersja</a>
              <template #content>
                <div class="kk-dropdown">
                  <div class="kk-dropdown-title">Quakker v1.0.0</div>
                  <p>
                    Created with <span class="text-red-400 animate-pulse">♥</span> for community
                  </p>
                  <p>Get Quakker on <a href="https://github.com/quartze/Quakker">GitHub</a></p>
                </div>
              </template>
            </Popper>
          </ClientOnly>
          <div class="copyright">© Quakker 2024</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
  import { Icon } from "@iconify/vue";
  import Popper from "vue3-popper";

  const searcher = ref("");
</script>

<style scoped>
  .kk-main {
    @apply lg:container mx-auto grid grid-cols-6 lg:grid-cols-12 h-screen relative;
  }

  .kk-sidebar-left-wrapper {
    @apply fixed bg-slate-950/90 backdrop-blur-sm sm:bg-transparent bottom-0 left-0 right-0 z-50 sm:static flex flex-col items-start justify-between col-span-1 lg:col-span-3 lg:px-8 border-r border-r-slate-800 sm:h-full;
  }

  .kk-sidebar-left {
    @apply sm:h-screen z-20 items-center lg:items-start w-full sm:pt-4 sm:pb-4 lg:pr-8 flex flex-col sticky top-0;
  }

  .kk-content {
    @apply lg:col-span-6 sm:col-span-5 col-span-6 pb-20 sm:pb-0;
  }

  .kk-menu {
    @apply w-full;
  }

  .kk-sidebar-right {
    @apply border-l lg:block hidden border-l-slate-800 text-left px-8 py-4 col-span-3;
  }

  .kk-sidebar-right-follow {
    @apply sticky top-0 z-20;
  }

  .kk-user-short {
    @apply hidden sm:flex gap-4 flex-shrink-0 mt-auto lg:mb-8 items-center lg:w-full;
  }

  .kk-user-avatar {
    @apply w-12 h-12;
  }

  .kk-user-avatar img {
    @apply object-cover rounded-full;
  }

  .kk-user-username {
    @apply hidden lg:block;
  }

  .kk-user-username .kk-username {
    @apply block text-left font-bold;
  }

  .icon-admin {
    @apply inline-block text-red-400;
  }

  .kk-user-username .kk-tag {
    @apply block text-left text-slate-400 text-sm;
  }

  .kk-user-options {
    @apply ml-auto lg:block hidden;
  }

  .kk-simple-nav {
    @apply flex gap-4 flex-col;
  }

  .kk-simple-nav-item {
    @apply flex items-center gap-2 font-semibold hover:text-blue-400 transition-colors cursor-pointer;
  }

  .kk-links {
    @apply text-sm flex flex-wrap gap-x-3 gap-y-1 text-slate-400;
  }

  .kk-links a {
    @apply hover:underline;
  }

  .copyright {
    @apply w-full text-xs;
  }

  .kk-dropdown a {
    @apply text-blue-400 font-bold;
  }
</style>

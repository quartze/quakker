<template>
  <div class="kk-sidebar">
    <Logo class="kk-logo" />
    <nav>
      <ul class="kk-menu">
        <li :class="routeName === 'index' ? 'active' : ''">
          <NuxtLink title="Przejdź do strony głównej" to="/">
            <Icon icon="lucide:home" />
            <span>Główna</span>
          </NuxtLink>
        </li>
        <li :class="routeName === 'browse' ? 'active' : ''">
          <NuxtLink title="Przeglądaj popularne tagi" to="/browse">
            <Icon icon="ri:search-line" />
            <span>Przeglądaj</span>
          </NuxtLink>
        </li>
        <li :class="routeName === 'notifications' ? 'active' : ''">
          <NuxtLink title="Przejdź do centrum powiadomień" to="/notifications">
            <Icon icon="bi:bell" />
            <span class="ring-bell-notify"></span>
            <span>Powiadomienia</span>
          </NuxtLink>
        </li>
        <li :class="routeName?.toString().startsWith('user') ? 'active' : ''">
          <NuxtLink title="Przejdź do swojego profilu" to="/user/2">
            <Icon icon="bx:user" />
            <span>Profil</span>
          </NuxtLink>
        </li>
        <li class="lg:hidden">
          <NuxtLink title="Przejdź do swojego profilu" to="/auth/logout">
            <Icon icon="bx:exit" />
            <span>Wyloguj się</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
  import { Icon } from "@iconify/vue";

  const route = useRoute();

  const routeName = computed(() => route.name);
</script>

<style scoped>
  .kk-logo {
    @apply hidden sm:block;
  }

  .kk-sidebar {
    @apply flex flex-col items-start justify-end w-full sm:w-auto;
  }

  nav {
    @apply w-full;
  }

  .kk-menu {
    @apply w-full flex sm:block py-2 sm:py-0 items-center justify-between sm:w-auto px-6 sm:px-0 border-t border-t-slate-700 sm:border-0;
  }

  .kk-menu li a {
    @apply flex relative items-center gap-4 text-xl font-bold sm:my-4 sm:py-4 sm:px-4 p-4 rounded-full bg-transparent hover:bg-slate-500/20 cursor-pointer transition-colors;
  }

  .kk-menu li span {
    @apply hidden lg:block;
  }

  .kk-menu li svg {
    @apply text-3xl;
  }

  .kk-menu .active {
    @apply text-blue-500;
  }

  .ring-bell-notify {
    @apply w-5 h-5 border-slate-950 border-4 rounded-full bg-blue-500 absolute left-8 bottom-3;
  }
</style>

<template>
  <div class="kk-page">
    <div class="kk-topbar">
      <div class="logo">
        <Logo />
      </div>
      <div class="navbar">
        <nav>
          <ul>
            <li>
              <NuxtLink to="/">Application</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/support/privacy">Polityka prywatności</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/support/terms">Zasady użytkowania</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/support/cookies">Ciasteczka</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="kk-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.kk-page {
  @apply container mx-auto py-4;
}

.kk-topbar {
  @apply  flex items-center justify-between;
}

.navbar {
  @apply uppercase text-slate-400 font-semibold
}

.navbar nav ul {
  @apply flex items-center gap-8 text-sm
}

.navbar ul li a {
  @apply  hover:text-white transition-colors
}

.navbar ul li a.router-link-active {
  @apply text-blue-400;
}
</style>

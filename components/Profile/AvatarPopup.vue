<template>
  <div class="kk-avatar-popup" @mouseenter="showPopper = true" @mouseleave="showPopper = false">
    <ClientOnly>
      <Popper arrow :show="showPopper">
        <div @click="goToProfile" class="kk-avatar-trigger">
          <slot />
        </div>
        <template #content>
          <div class="kk-dropdown">
            <div class="kk-header">
              <div class="kk-user-avatar">
                <img
                  @click="goToProfile"
                  src="/assets/img/avatars/57071227.webp"
                  alt="Avatar użytkownika quartze"
                  width="64"
                  height="64" />
              </div>
              <div class="kk-cta-follow">
                <Button>Obserwuj</Button>
              </div>
            </div>
            <div class="kk-user-username" @click="goToProfile">
              <span class="kk-username">awesome*</span>
              <span class="kk-tag">@awesomestar_</span>
            </div>
            <div class="kk-user-desc">Be yourself</div>

            <div class="kk-footer">
              <div class="kk-footer-item"><strong>6043</strong> <span>Obserwujących</span></div>
              <div class="kk-footer-item"><strong>43</strong> <span>Obserwuje</span></div>
            </div>
          </div>
        </template>
      </Popper>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
  import Popper from "vue3-popper";

  const showPopper = ref(false);

  const goToProfile = () => {
    navigateTo("/user/awesomestar_");
  };
</script>

<style scoped>
  .kk-user-avatar {
    @apply rounded-full w-16 cursor-pointer;
  }

  .kk-user-avatar img {
    @apply w-full h-full object-cover rounded-full;
  }

  .kk-user-username {
    @apply mt-2;
  }

  .kk-username {
    @apply block text-lg text-left font-bold;
  }

  .kk-tag {
    @apply block text-left text-slate-400 text-sm;
  }

  .kk-user-desc {
    @apply my-4 text-slate-50;
  }

  .kk-dropdown {
    @apply min-w-80;
  }

  .kk-header {
    @apply flex items-center justify-between;
  }

  .kk-footer {
    @apply mt-2 text-sm;
  }

  .kk-footer-item {
    @apply block text-slate-500;
  }

  .kk-footer-item strong {
    @apply text-slate-400;
  }
</style>

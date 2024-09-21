<template>
  <div class="kk-user-short-wrapper">
    <div class="kk-user-short-avatar">
      <ProfileAvatarPopup>
        <img
          @click="goToProfile"
          :src="avatarUrl"
          :alt="`Avatar użytkownika ${displayname}`"
          width="48"
          height="48" />
      </ProfileAvatarPopup>
    </div>
    <div class="kk-user-short-user" :class="{ 'kk-additional-item': observe || createdAt }">
      <div class="kk-user-short-username">
        <span class="kk-username">
          <span @click="goToProfile" class="kk-username-normal">{{ displayname }}</span>
          <UserBadge :type="IUserBadgeType.VERIFIED" />
        </span>
        <span @click="goToProfile" class="kk-tag">@{{ username }}</span>
      </div>
      <span class="kk-time" v-if="createdAt">{{ dateFromNow(createdAt) }}</span>
      <span class="kk-observe" v-if="observe">
        <Button>Obserwuj</Button>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { dateFromNow } from "~/helpers/date";
  import type { IUserProfileShortProps } from "~/types/components";

  const { avatarUrl, displayname, username, createdAt, observe } =
    defineProps<IUserProfileShortProps>();

  const goToProfile = () => {
    navigateTo(`/user/${username}`);
  };
</script>

<style scoped>
  .kk-user-short-wrapper {
    @apply flex flex-shrink-0 gap-2 mb-2 items-center w-full;
  }

  .kk-user-short-avatar {
    @apply rounded-full flex-shrink-0 w-12 h-12 flex items-center justify-center cursor-pointer;
  }

  .kk-user-short-avatar img {
    @apply object-cover w-12 h-12 rounded-full;
  }

  .kk-user-short-user {
    @apply flex w-auto cursor-pointer;
  }

  .kk-username {
    @apply flex items-center gap-1 text-left font-bold;
  }

  .kk-tag {
    @apply block text-left text-slate-400 text-sm;
  }

  .kk-time {
    @apply ml-auto text-sm hidden sm:block text-slate-400;
  }

  .kk-observe {
    @apply ml-auto text-sm 2xl:block hidden;
  }

  .kk-dropdown {
    @apply font-normal;
  }

  .kk-user-short-username {
    @apply -mt-2 block;
  }

  .kk-additional-item {
    @apply w-full;
  }

  .kk-sidebar-short-user .kk-user-short-username {
    @apply hidden lg:block;
  }
</style>

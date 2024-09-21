<template>
  <div class="kk-notify">
    <div
      class="kk-notify-icon"
      :class="{
        'kk-heart': type === INotifyBlockType.LIKED,
        'kk-star': type === INotifyBlockType.PROPOSITION,
        'kk-comment': type === INotifyBlockType.COMMENTED,
        'kk-mention': type === INotifyBlockType.MENTIONED,
      }">
      <Icon v-if="type === INotifyBlockType.LIKED" icon="bi:heart-fill" />
      <Icon icon="streamline:star-2-solid" v-if="type === INotifyBlockType.PROPOSITION" />
      <Icon icon="majesticons:comment" v-if="type === INotifyBlockType.COMMENTED" />

      <Icon v-if="type === INotifyBlockType.MENTIONED" icon="bi:at" />
    </div>
    <div class="kk-notify-content">

      <ProfileAvatarPopup>
        <img class="kk-avatar-user" :src="user?.avatarUrl" alt="Avatar użytkownika awesomestar" />
      </ProfileAvatarPopup>

      <div v-if="type === INotifyBlockType.LIKED" class="kk-notify-action">
        <strong>{{ user?.displayname }}</strong> lubi post, który napisałeś.
      </div>

      <div v-if="type === INotifyBlockType.COMMENTED" class="kk-notify-action">
        <strong>{{ user?.displayname }}</strong>
      </div>
      <div class="kk-reply" v-if="reply">W odpowiedzi do @{{ reply }}</div>

      <div v-if="type === INotifyBlockType.MENTIONED" class="kk-notify-action">
        <strong>{{ user?.displayname }}</strong>
      </div>
      <div class="kk-reply" v-if="type === INotifyBlockType.MENTIONED">
        Wspomniał cie w wypowiedzi
      </div>

      <div v-if="type === INotifyBlockType.PROPOSITION" class="kk-notify-action">
        <strong>{{ user?.displayname }}</strong>
      </div>

      <div class="kk-notify-post">
        {{ content }}
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Icon } from "@iconify/vue";
  import type { INotifyBlockProps } from "~/types/components";

  const { user, type, content, reply } = defineProps<INotifyBlockProps>();
</script>

<style scoped>
  .kk-notify {
    @apply p-6;
  }

  .kk-avatar-user {
    @apply w-12 h-12 rounded-full object-cover;
  }

  .kk-notify {
    @apply flex border-b border-b-slate-800 last-of-type:border-0 gap-4 items-start flex-shrink-0;
  }

  .kk-notify-icon {
    @apply text-2xl py-3;
  }

  .kk-heart {
    @apply text-red-400;
  }

  .kk-star {
    @apply text-indigo-400;
  }

  .kk-comment {
    @apply text-blue-400;
  }

  .kk-mention {
    @apply text-pink-400;
  }

  .kk-notify-action {
    @apply mb-2 text-white;
  }

  .kk-notify-post {
    @apply text-sm text-slate-500;
  }

  .kk-reply {
    @apply text-sm mb-2 text-slate-400;
  }
</style>

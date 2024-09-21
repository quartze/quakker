<template>
  <article @click="goToPost" class="kk-post" :id="`kk-post-${id}`">
    <div class="kk-post-header">
      <div class="kk-post-user-avatar">
        <img
          :src="user.avatarUrl"
          alt=""
          height="48"
          width="48"
          class="kk-user-avatar"
          quality="50" />
      </div>
      <div class="kk-post-username">
        <span class="kk-username">{{ user.displayname }}</span>
        <span class="kk-tag">@{{ user.username }}</span>
        <span class="kk-time">{{ dateFromNow(createdAt) }}</span>
      </div>
    </div>
    <div class="kk-post-body">
      <div :class="`kk-post-images kk-images-${images.length}`" v-if="images.length">
        <template v-for="image in images" :key="image.id">
          <img :src="image.url" v-if="image.type === 'image'" alt="" />
          <video controls class="kk-editor-video" v-if="image.type.startsWith('video')">
            <source :src="image.url" type="video/mp4" />
          </video>
        </template>
      </div>
      <div v-if="content" class="kk-post-text">{{ trimContent }}</div>
    </div>
  </article>
</template>

<script lang="ts" setup>
  import { dateFromNow } from "~/helpers/date";
  import type { IPostReply } from "~/types/components";

  const { id, user, content, images, reply, createdAt } = defineProps<IPostReply>();

  const goToPost = () => {
    navigateTo(`/post/${id}`);
  };

  const trimContent = computed(() => {
    if (content && content?.length >= 100) return content?.slice(0, 100) + "...";
    else return content;
  });
</script>

<style scoped>
  .kk-post {
    @apply hover:bg-slate-900/30 transition-colors relative p-4 border-b-slate-800 border-b rounded-lg border border-slate-800 mt-4 cursor-pointer;
  }

  .kk-post-header {
    @apply flex gap-1 mt-auto mb-2 items-center w-full;
  }

  .kk-post-text {
    @apply text-slate-50;
  }

  .kk-post-user-avatar {
    @apply rounded-full w-10;
  }

  .kk-post-user-avatar img {
    @apply object-cover w-8 h-8 rounded-full;
  }

  .kk-post-username {
    @apply flex gap-2 w-full items-end;
  }

  .kk-post-username .kk-username {
    @apply block text-left font-bold;
  }

  .kk-post-username .kk-tag {
    @apply block text-left text-slate-400 text-sm;
  }

  .kk-time {
    @apply ml-auto text-sm text-slate-400;
  }

  .kk-post-images {
    @apply grid gap-1 relative w-24 rounded-lg;
  }

  .kk-post-images img {
    @apply object-cover rounded-lg;
  }

  .kk-post-body {
    @apply flex gap-4;
  }
</style>

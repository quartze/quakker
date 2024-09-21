<template>
  <article class="kk-post" :id="`kk-post-${id}`" tabindex="0" @click="goToPost">
    <div class="kk-post-header">
      <UserProfileShort
        @click.stop
        :avatarUrl="user.avatarUrl"
        :createdAt="createdAt"
        :displayname="user.displayname"
        :username="user.username" />
    </div>
    <div class="kk-post-body">
      <div class="kk-post-text" v-html="richContent" tabindex="0" @click="goToPost"></div>
      <Gallery
        @click.stop
        :class="`kk-post-images kk-images-${images.length}`"
        v-if="images"
        :images="images">
        <template v-for="image in images" :key="image.id">
          <img
            :src="image.url"
            v-if="image.type === 'image'"
            :alt="'Obraz o nazwie ' + image.name"
            @click="toggleGallery" />
          <video
            controls
            class="kk-editor-video"
            v-if="image.type.startsWith('video')">
            <source :src="image.url" type="video/mp4" />
          </video>
        </template>
      </Gallery>
      <div class="kk-post-reply" v-if="reply">
        <PostReply
          :id="reply.id"
          :user="reply.user"
          :content="reply.content"
          :images="reply.images"
          :createdAt="reply.createdAt" />
      </div>
    </div>
    <div class="kk-time-mobile">
      Dodano <ClientOnly><time :datetime="new Date(createdAt).toISOString()">{{ dateFromNow(createdAt) }}</time></ClientOnly>
    </div>
    <ClientOnly>
      <div class="kk-post-footer" @click.stop>
        <div
          @click="navigateTo(`/post/${id}`)"
          class="kk-post-footer-item kk-post-comments"
          :class="{ active: status.commented }">
          <Icon class="text-xl" icon="basil:comment-outline" v-if="!status.commented" />
          <Icon class="text-xl" icon="basil:comment-solid" v-if="status.commented" />
          <span>{{ formatNumber(stats.comments) }}</span>
        </div>
        <Popup>
          <template #trigger>
            <div class="kk-post-footer-item kk-post-share" :class="{ active: status.shared }">
              <Icon class="text-xl" icon="material-symbols:repeat" />
              <span>{{ formatNumber(stats.shares) }}</span>
            </div>
          </template>
          <template #body>
            <InputsUserPost
              :reply="{
                id: id,
                user: user,
                content: content,
                images: images,
                createdAt: createdAt,
              }" />
          </template>
        </Popup>

        <div class="kk-post-footer-item kk-post-love" :class="{ active: status.liked }">
          <Icon class="text-xl" icon="mdi:heart" v-if="status.liked" />
          <Icon class="text-xl" icon="mdi:heart-outline" v-if="!status.liked" />
          <span>{{ formatNumber(stats.likes) }}</span>
        </div>
        <ClientOnly>
          <Popper arrow>
            <div class="kk-post-footer-item">
              <Icon class="text-xl" icon="fluent:data-trending-24-filled" />
              <span>{{ formatNumber(stats.views) }}</span>
            </div>

            <template #content>
              <div class="kk-dropdown">
                <div class="kk-dropdown-title">Wyświetlenia tego postu</div>
                <div class="kk-dropdown-desc max-w-48 mt-2">
                  Ten post wyświetlił się na karcie około {{ stats.views }} razy.
                </div>
              </div>
            </template>
          </Popper>
        </ClientOnly>
        <div class="kk-post-footer-item" @click="sharePost">
          <Icon class="text-xl" icon="mi:share" />
        </div>
      </div>
    </ClientOnly>
  </article>
</template>

<script lang="ts" setup>
  import { Icon } from "@iconify/vue";
  import Popper from "vue3-popper";
  import { formatNumber } from "~/helpers/numbers";
  import type { IPost } from "~/types/components";
  import { useNotify } from "~/store/notify";
  import { INotifyType } from "~/types/stores";
  import { dateFromNow } from "~/helpers/date";

  const { id, user, content, images, stats, reply, status, createdAt } = defineProps<IPost>();

  const notify = useNotify();
  const { addNotify } = notify;

  const prettierContent = computed(() => {
    let rich = content?.replace(/#[\w-]+/g, "<span class='kk-rich-tag'>$&</span>");
    return rich;
  });
  const richContent = ref(prettierContent);

  const displayGallery = ref(false);

  const toggleGallery = () => {
    displayGallery.value = !displayGallery.value;
  };

  const sharePost = () => {
    const urlToCopy = window.location.href;
    navigator.clipboard.writeText(urlToCopy);

    addNotify({
      message: "Skopiowano link do schowka",
      type: INotifyType.clean,
      duration: 2000,
    });
  };

  const goToPost = () => {
    navigateTo(`/post/${id}`);
  };
</script>

<style scoped>
  .kk-post {
    @apply relative p-4 border-b-slate-800 border-b cursor-pointer;
  }

  .kk-post-text {
    @apply text-slate-50;
  }

  .kk-post-images {
    @apply grid gap-1 relative;
  }

  .kk-images-1 {
    @apply grid-cols-1;
  }

  .kk-images-1 img {
    @apply sm:max-h-[600px] sm:min-h-[500px] border border-slate-700 sm:w-auto sm:h-auto w-full h-auto object-cover rounded-lg my-4;
  }

  .kk-images-2 {
    @apply grid-cols-2;
  }

  .kk-images-2 img {
    @apply max-h-[400px] min-h-[300px] w-96 object-cover rounded-lg my-4;
  }

  .kk-images-3 {
    @apply grid-cols-3 h-96 max-h-full grid-flow-col;
  }

  .kk-images-3 img {
    @apply h-full w-auto first-of-type:row-span-2 first-of-type:col-span-2 object-cover rounded-lg block;
  }

  .kk-post-footer {
    @apply flex mt-4 items-center justify-between;
  }

  .kk-post-footer-item {
    @apply flex items-center gap-2 text-slate-400 text-sm px-2 py-2 hover:bg-slate-800/50 rounded-full transition-colors cursor-pointer;
  }

  .kk-editor-video {
    @apply rounded-lg border border-slate-700;
  }

  .kk-post-share.active {
    @apply text-green-400 hover:bg-green-400/10;
  }

  .kk-post-comments.active {
    @apply text-blue-400 hover:bg-blue-400/10;
  }

  .kk-post-love.active {
    @apply text-red-400 hover:bg-red-400/10;
  }

  .kk-time-mobile {
    @apply text-xs mt-4 text-slate-400 sm:hidden;
  }
</style>

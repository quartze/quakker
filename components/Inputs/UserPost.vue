<template>
  <div class="kk-user-rich">
    <div class="kk-user-rich-avatar">
      <img
        src="/assets/img/avatars/57071227.webp"
        alt="Avatar użytkownika quartze"
        width="48"
        height="48" />
    </div>
    <div class="kk-user-rich-editor">
      <div class="kk-editor">
        <InputsTextarea :max="255" :clear="true" :placeholder="placeholder" v-model="content" />
      </div>
      <div class="kk-editor-display">
        <InputsPostCommentsType v-model="editorPostType" v-if="viewSwitcher" />
      </div>
      <div class="kk-editor-images">
        <template v-for="image in handlePreview" :key="image.id">
          <div class="kk-editor-image">
            <div @click="handleRemoveImage(image.id)" class="remove-image">
              <Icon icon="iconamoon:close-fill" />
            </div>
            <img :src="image.url" v-if="image.type.startsWith('image')" alt="" />

            <video class="kk-editor-video" v-if="image.type.startsWith('video')">
              <source :src="image.url" type="video/mp4" />
            </video>
          </div>
        </template>
      </div>
      <div class="kk-editor-toolbar">
        <Popup>
          <template #trigger>
            <div class="kk-add-image kk-toolbar-item">
              <Icon class="text-2xl" icon="ph:image" />
            </div>
          </template>
          <template #body>
            <div class="kk-popup-title">Wyślij zdjęcia</div>
            <div class="kk-popup-desc">
              Zdjęcia muszą zawierać rozszerzenie
              <i>webp, png, jpg, gif</i> oraz nie być większe niż 5MB.
            </div>
            <InputsUpload
              :multiple="true"
              v-model="editorImages"
              :size="5000"
              :max="5"
              accept="image/webp, image/png, image/jpg, image/jpeg, image/gif" />
          </template>
        </Popup>
        <Popup>
          <template #trigger>
            <div class="kk-add-video kk-toolbar-item">
              <Icon class="text-2xl" icon="octicon:video-24" />
            </div>
          </template>
          <template #body>
            <div class="kk-popup-title">Wyślij filmy</div>
            <div class="kk-popup-desc">
              Filmy muszą zawierać rozszerzenie
              <i>mp4, webm</i> oraz nie być większe niż 15MB.
            </div>
            <InputsUpload
              :multiple="true"
              v-model="editorImages"
              :size="15000"
              :max="5"
              accept="video/mp4, video/webm" />
          </template>
        </Popup>
        <div class="kk-post">
          <Button>{{ buttonText ? buttonText : "Opublikuj wpis" }}</Button>
        </div>
      </div>
      <div class="kk-reply" v-if="reply">
        <div class="kk-reply-title">Odpowiadasz na:</div>
        <PostReply
          :id="reply.id"
          :user="reply.user"
          :content="reply.content"
          :images="reply.images"
          :createdAt="reply.createdAt" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Icon } from "@iconify/vue";
  import {
    type IUploadImagesPreview,
    type IUploadImages,
    type IUserPostProps,
  } from "~/types/components";

  const { reply, viewSwitcher, placeholder, buttonText } = defineProps<IUserPostProps>();

  const content = ref("");
  const editorPostType = ref(0);
  const editorImages = ref<IUploadImages[]>([]);
  const editorImagesPreview = ref<IUploadImagesPreview[]>([]);
  const editorVideos = ref([]);

  const onInput = (ev: any) => {
    content.value = ev.target.innerHTML;
  };

  const handleKeydown = (ev: any) => {
    if (ev.key === "Enter") {
      ev.preventDefault();

      document.execCommand("insertParagraph");
    }
  };

  const handlePreview = computed((ev: any) => {
    return editorImages.value.map((image) => {
      return {
        id: image.id,
        name: image.file.name,
        type: image.file.type,
        url: URL.createObjectURL(image.file),
      };
    });
  });

  const handleRemoveImage = (id: number) => {
    editorImages.value = editorImages.value.filter((image) => {
      return image.id !== id;
    });
  };
</script>

<style scoped>
  .kk-user-rich {
    @apply p-4 grid grid-cols-8 gap-4 w-full;
  }

  .kk-user-rich-avatar img {
    @apply w-12 ml-auto h-12 object-cover rounded-full;
  }

  .kk-user-rich-editor {
    @apply col-span-7 relative;
  }

  .kk-editor {
    @apply w-full bg-transparent min-h-24 appearance-none border-none outline-none font-sans text-2xl relative;
  }

  .kk-editor-toolbar {
    @apply flex items-center border-t border-t-slate-700 mt-2 pt-2 gap-2;
  }

  .kk-toolbar-item {
    @apply text-blue-500 cursor-pointer hover:text-white transition-colors;
  }

  .kk-post {
    @apply ml-auto;
  }

  .kk-editor-placeholder {
    @apply absolute left-0 right-0 -z-10 text-slate-500 pointer-events-none text-2xl;
  }

  .kk-editor-images {
    @apply relative my-2 flex flex-wrap gap-2;
  }

  .kk-editor-image {
    @apply w-48 h-48 rounded-lg relative;
  }

  .kk-editor-image img {
    @apply object-cover rounded-lg w-full h-full;
  }

  .kk-editor-image .remove-image {
    @apply absolute z-10 transition-opacity cursor-pointer left-0 right-0 opacity-0 top-0 bottom-0 bg-black/50 w-full h-full rounded-lg flex items-center justify-center text-2xl;
  }

  .kk-editor-image:hover .remove-image {
    @apply opacity-100;
  }

  .kk-editor-video {
    @apply w-full h-full;
  }

  .kk-reply {
    @apply mt-4 pt-4 max-w-96 border-t border-t-slate-700;
  }

  .kk-reply .kk-post {
    @apply border border-slate-700;
  }

  .kk-reply-title {
    @apply text-slate-400;
  }
</style>

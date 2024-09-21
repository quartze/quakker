<template>
  <div class="kk-input-upload" :class="{ 'kk-error': fileIsTooBig }">
    <div class="kk-input-upload-field">
      <label class="kk-input-upload-wrapper" aria-label="Wyślij pliki" role="button" tabindex="0">
        <input
          @change="handleChangeFile"
          :size="size"
          :multiple="multiple"
          :max="max"
          :accept="accept"
          aria-describedby="uploadDescription"
          type="file" />
        <div class="kk-input-upload-icon">
          <Icon class="text-2xl" icon="material-symbols:upload" />
        </div>
        <span id="uploadDescription">Kliknij lub przeciągnij i upuść pliki tutaj.</span>
      </label>
      <span class="kk-error-msg-size" v-if="fileIsTooBig"
        >Plik, który próbujesz przesłać waży za dużo!</span
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Icon } from "@iconify/vue";
  import type { IUploadProps, IUploadImages } from "~/types/components";

  const { multiple, modelValue, accept, max, size } = defineProps<IUploadProps>();

  const emits = defineEmits(["update:modelValue"]);

  const filesOriginal = ref<IUploadImages[]>(modelValue || []);
  const fileIsTooBig = ref(false);

  const handleChangeFile = (e: Event) => {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    const files = target.files;

    if (!files) return;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      const id = filesOriginal.value[filesOriginal.value.length - 1]
        ? filesOriginal.value[filesOriginal.value.length - 1].id + 1
        : 1;


      if (size && (file.size / 1000) > size) {
        fileIsTooBig.value = true;
        return;
      }

      fileIsTooBig.value = false;

      filesOriginal.value.push({
        id: i + id,
        file: file,
      });
    }

    emits("update:modelValue", filesOriginal.value);
  };
</script>

<style scoped>
  .kk-input-upload-wrapper input {
    @apply hidden;
  }

  .kk-input-upload-wrapper {
    @apply my-6 hover:text-white hover:border-white transition-colors cursor-pointer font-semibold flex items-center justify-center gap-2 flex-col p-6 border-2 rounded-lg border-dashed border-slate-400 text-slate-400;
  }

  .kk-error-msg-size {
    @apply text-sm text-red-400;
  }

  .kk-error .kk-input-upload-wrapper {
    @apply border-red-400 text-red-500;
  }
</style>

<template>
  <div class="kk-popup">
    <div class="kk-popup-trigger" @click="handleOpen">
      <slot name="trigger" />
    </div>
    <transition name="fade">
      <div class="kk-popup-body-wrapper" v-if="popupShow" @mousedown="handleClose">
        <div class="kk-popup-content" @mousedown.stop>
          <div class="kk-popup-popup-close" @click="handleClose">
            <Icon icon="iconamoon:close-fill" />
          </div>
          <div class="kk-popup-body">
            <slot name="body" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
  import { Icon } from "@iconify/vue";

  const emits = defineEmits(["close", "open"]);

  const popupShow = ref(false);

  const handleOpen = () => {
    popupShow.value = true;
    emits("open");
  };

  const handleClose = () => {
    popupShow.value = false;
    emits("close");
  };
</script>

<style scoped>
  .kk-popup-body-wrapper {
    @apply fixed flex left-0 right-0 top-0 bottom-0 z-50 bg-slate-900/80 items-center justify-center;
  }

  .kk-popup-content {
    @apply bg-slate-800 p-6 w-full lg:w-auto absolute lg:relative bottom-0 lg:bottom-auto top-24 lg:top-auto rounded-lg sm:min-w-[500px] mx-auto;
  }

  .kk-popup-popup-close {
    @apply ml-auto w-12 h-12 p-1 text-2xl rounded-full flex items-center justify-center bg-blue-500/25 hover:bg-blue-500/75 transition-colors cursor-pointer;
  }
</style>

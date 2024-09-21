<template>
  <div class="kk-post-gallery" @click="toggleGallery">
    <slot />
    <Transition name="fade">
      <div class="kk-gallery" v-if="showGallery">
        <div class="kk-gallery-header" @click.stop>
          <div class="kk-gallery-close">
            <Icon class="text-2xl" icon="material-symbols:close-rounded" @click="toggleGallery" />
          </div>
        </div>
        <div class="kk-gallery-images-wrapper" @click.stop>
          <div class="kk-gallery-prev">
            <Icon icon="mdi:chevron-left" class="text-5xl" @click="goPrevious" />
          </div>
          <template v-for="(image, id) in images" :key="image.id">
            <div class="kk-gallery-item" v-if="currentImage === id && image.type === 'image'">
              <div class="kk-alt-wrapper">
                <ClientOnly>
                  <Popper arrow>
                    <span class="kk-alt">ALT</span>
                    <template #content>
                      <div class="kk-dropdown text-sm min-w-48">{{ image.name }}</div>
                    </template>
                  </Popper>
                </ClientOnly>
              </div>
              <img :src="image.url" :alt="'Obraz o nazwie ' + image.name" />
            </div>
            <div
              class="kk-gallery-item"
              v-if="currentImage === id && image.type.startsWith('video')">
              <div class="kk-alt-wrapper">
                <ClientOnly>
                  <Popper arrow>
                    <span class="kk-alt">ALT</span>
                    <template #content>
                      <div class="kk-dropdown text-sm min-w-48">{{ image.name }}</div>
                    </template>
                  </Popper>
                </ClientOnly>
              </div>
              <video tabindex="0" controls class="kk-editor-video" autoplay>
                <source :src="image.url" type="video/mp4" />
              </video>
            </div>
          </template>
          <div class="kk-gallery-next">
            <Icon icon="mdi:chevron-right" class="text-5xl" @click="goNext" />
          </div>
        </div>
        <div class="kk-gallery-footer" @click.stop>
          <div class="kk-dots">
            <div
              class="kk-dot"
              :class="{ active: currentImage === indx }"
              v-for="(image, indx) in images"
              :key="image.id"></div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
  import Popper from "vue3-popper";
  import { Icon } from "@iconify/vue";
  import type { IGalleryProps } from "#imports";

  const { images } = defineProps<IGalleryProps>();

  const showGallery = ref(false);
  const currentImage = ref(0);

  const toggleGallery = () => {
    if (images[0].type.startsWith('video')) return;
    showGallery.value = !showGallery.value;
  };

  const goNext = () => {
    if (currentImage.value < images.length - 1) {
      currentImage.value++;
    }
  };

  const goPrevious = () => {
    if (currentImage.value > 0) {
      currentImage.value--;
    }
  };

  // Accessible
  onMounted(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && showGallery.value) {
        toggleGallery();
      }
      if (e.key === "ArrowRight" && showGallery.value) {
        goNext();
      }
      if (e.key === "ArrowLeft" && showGallery.value) {
        goPrevious();
      }
    });
  });
</script>

<style scoped>
  .kk-gallery {
    @apply fixed top-0 gap-24 left-0 w-full h-full flex flex-col z-50 items-center justify-center bg-slate-950/50;
  }

  .kk-dot {
    @apply bg-white/50 transition-colors w-2 h-2 rounded-full block;
  }

  .kk-dots {
    @apply flex gap-2;
  }

  img {
    @apply w-full max-h-[600px] lg:min-h-[400px] rounded-lg;
  }

  .kk-dot.active {
    @apply bg-white;
  }

  .kk-gallery-images-wrapper {
    @apply flex gap-2 items-center justify-center;
  }

  .kk-gallery-item {
    @apply relative;
  }

  .kk-gallery-prev,
  .kk-gallery-next,
  .kk-gallery-close {
    @apply h-12 w-12 rounded-full cursor-pointer hover:bg-white/10 active:bg-white/40 transition-colors flex items-center justify-center;
  }

  .kk-alt {
    @apply px-3 py-1 bg-slate-900/80 hover:bg-slate-900 cursor-pointer text-slate-200 uppercase text-sm rounded-lg;
  }

  .kk-alt-wrapper {
    @apply absolute bottom-2 left-2;
  }

  .kk-gallery-close {
    @apply ml-auto;
  }
</style>

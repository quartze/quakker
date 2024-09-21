<template>
  <div class="kk-post-comments-type">
    <ClientOnly>
      <Popper
      @open:popper="isDropdownOpen = true"
      @close:popper="isDropdownOpen = false"
      >
        <button
          class="kk-post-comments-type-trigger"
          tabindex="0"
          aria-haspopup="true"
          :aria-expanded="isDropdownOpen"
          aria-label="Wybierz, kto może odpowiedzieć">
          <Icon class="text-xl" :icon="getIcon" />
          <span>{{ getLabel }}</span>
        </button>
        <template #content="{ close }">
          <div class="kk-dropdown">
            <div class="kk-dropdown-close" @click="close">
              <Icon icon="material-symbols:close" />
            </div>
            <div class="kk-dropdown-title">Kto może odpowiedzieć?</div>
            <p class="kk-dropdown-desc">
              Zdecyduj, kto może odpowiedzieć na ten wpis. Wspomniane osoby zawsze mogą odpowiadać.
            </p>

            <ul class="kk-post-comments-switcher">
              <li
                class="kk-post-comments-item"
                :class="{ active: currentSelected === 0 }"
                role="option"
                :aria-selected="currentSelected === 0"
                tabindex="0"
                @click="handleChangeSelected(0)">
                <Icon class="kk-post-comments-type-icon" icon="streamline:web" />
                <span>Każdy może odpowiedzieć</span>
              </li>
              <li
                class="kk-post-comments-item"
                :class="{ active: currentSelected === 1 }"
                role="option"
                :aria-selected="currentSelected === 1"
                tabindex="0"
                @click="handleChangeSelected(1)">
                <Icon class="kk-post-comments-type-icon" icon="ph:users" />
                <span>Konta, które obserwujesz</span>
              </li>
              <li
                class="kk-post-comments-item"
                :class="{ active: currentSelected === 2 }"
                role="option"
                :aria-selected="currentSelected === 2"
                tabindex="0"
                @click="handleChangeSelected(2)">
                <Icon class="kk-post-comments-type-icon" icon="lets-icons:e-mail" />
                <span>Użytkownicy, których wspominasz</span>
              </li>
              <li
                class="kk-post-comments-item"
                :class="{ active: currentSelected === 3 }"
                role="option"
                :aria-selected="currentSelected === 3"
                tabindex="0"
                @click="handleChangeSelected(3)">
                <Icon class="kk-post-comments-type-icon" icon="iconamoon:close-fill" />
                <span>Nikt</span>
              </li>
            </ul>
          </div>
        </template>
      </Popper>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
  import { Icon } from "@iconify/vue";
  import Popper from "vue3-popper";
  import type { IPostCommentsTypeProps } from "~/types/components";

  const { modelValue } = defineProps<IPostCommentsTypeProps>();

  const emits = defineEmits(["update:modelValue"]);

  const isDropdownOpen = ref(false);

  const data = ref([
    {
      label: "Każdy może odpowiedzieć",
      icon: "streamline:web",
      value: 0,
    },
    {
      label: "Odpowiadać mogą konta, które obserwujesz",
      icon: "ph:users",
      value: 1,
    },
    {
      label: "Odpowiadać mogą tylko użytkownicy, których wspominasz",
      icon: "lets-icons:e-mail",
      value: 2,
    },
    {
      label: "Nikt nie może odpowiadać",
      icon: "iconamoon:close-fill",
      value: 3,
    },
  ]);
  const currentSelected = ref(modelValue ? modelValue : 0);

  const handleChangeSelected = (id: number) => {
    currentSelected.value = id;
    emits("update:modelValue", id);
  };

  const getLabel = computed(() => {
    return data.value[currentSelected.value].label;
  });

  const getIcon = computed(() => {
    return data.value[currentSelected.value].icon;
  });
</script>

<style scoped>
  .kk-post-comments-type-trigger {
    @apply flex items-center gap-2 py-2 text-sm text-blue-400 font-bold cursor-pointer;
  }

  .kk-post-comments-switcher {
    @apply mt-6;
  }

  .kk-post-comments-item {
    @apply flex gap-4 items-center my-2 py-2 px-4 rounded-full bg-transparent transition-colors cursor-pointer hover:bg-blue-200/10;
  }

  .kk-post-comments-item span {
    @apply font-bold;
  }

  .kk-post-comments-type-icon {
    @apply w-10 h-10 bg-blue-500 p-2 flex items-center justify-center text-white rounded-full;
  }

  .active {
    @apply bg-blue-500/10 text-white;
  }

  .kk-dropdown-close {
    @apply ml-auto flex justify-center rounded-full items-center hover:bg-blue-500/25 transition-colors cursor-pointer w-12 h-12 absolute right-2 top-0 my-2;
  }
</style>

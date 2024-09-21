<template>
  <div class="kk-search-wrapper">
    <ClientOnly>
      <Popper class="kk-search-popper">
        <label class="kk-search">
          <Icon class="text-xl" icon="ph:magnifying-glass" />
          <input
            :value="modelValue"
            @input="updateValue"
            type="text"
            class="kk-input"
            aria-label="Wyszukaj słowo kluczowe"
            :placeholder="placeholder ? placeholder : 'Wyszukaj...'" />
        </label>
        <template #content>
          <div class="kk-dropdown">
            <div class="kk-waiting-result" v-if="false">
              Spróbuj wyszukać słowa kluczowe, lub osoby.
            </div>
            <div class="kk-result-keywords">
              <div class="kk-result-keyword" @click="goToTag('#familia')">
                <Icon class="text-xl" icon="ph:magnifying-glass" />
                <span>#familia</span>
              </div>
              <div class="kk-result-keyword" @click="goToTag('#warszawa')">
                <Icon class="text-xl" icon="ph:magnifying-glass" />
                <span>#warszawa</span>
              </div>
              <div class="kk-result-keyword" @click="goToTag('#wwa')">
                <Icon class="text-xl" icon="ph:magnifying-glass" />
                <span>#wwa</span>
              </div>
            </div>
            <div class="kk-result-users">
              <UserProfileShort
                avatar-url="https://randomuser.me/api/portraits/women/74.jpg"
                displayname="Roberta Scott"
                username="robscott_221" />
              <UserProfileShort
                avatar-url="https://randomuser.me/api/portraits/women/56.jpg"
                displayname="Anita Chapman"
                username="anchapman" />
              <UserProfileShort
                avatar-url="https://randomuser.me/api/portraits/men/21.jpg"
                displayname="Brett Lee"
                username="brtle2x2" />
            </div>
          </div>
        </template>
      </Popper>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
  import { Icon } from "@iconify/vue";
  import Popper from "vue3-popper";
  import type { ISearchInputProps } from "~/types/components";

  const { placeholder, modelValue } = defineProps<ISearchInputProps>();
  const emit = defineEmits(["update:modelValue"]);

  const goToTag = (tag: string) => {
    navigateTo(`/search/?s=${tag.replace("#", "%23")}`);
  };

  const updateValue = (event: any) => {
    emit("update:modelValue",event.target.value);
  };
</script>

<style scoped>
  .kk-input {
    @apply bg-transparent w-full focus:outline-none border-none;
  }

  .kk-dropdown {
    @apply max-w-96 xl:min-w-96;
  }

  .kk-search {
    @apply border-2 border-slate-700 rounded-full px-5 py-3 w-full flex items-center gap-2 hover:bg-slate-900 hover:border-blue-500 transition-colors;
  }

  .kk-search:focus-within {
    @apply border-blue-500 bg-slate-900;
  }

  .kk-waiting-result {
    @apply text-slate-500;
  }

  .kk-result-keywords {
    @apply flex flex-col gap-6;
  }

  .kk-result-keyword {
    @apply flex items-center cursor-pointer hover:text-blue-400 transition-colors gap-2;
  }

  .kk-result-users {
    @apply mt-4 pt-4 border-t border-t-slate-700 flex flex-col gap-2;
  }

  .kk-search-popper {
    @apply w-full block !border-0 !m-0;
  }
</style>

<template>
  <div class="kk-input-wrapper" :class="{ 'kk-clear-input': clear }">
    <label class="kk-input-label" :aria-label="placeholder ? placeholder : 'Co tam?'">
      <ClientOnly>
        <textarea
          v-model="inputValue"
          :placeholder="placeholder ? placeholder : 'Co tam?'"
          @change="updateValue"
          @input="updateValue"
          ref="editor"
          class="kk-input"
          aria-label="Opisz, co się u ciebie dzieje?"
          :maxlength="max">
        </textarea>
      </ClientOnly>
      <div
        v-if="max"
        class="kk-counter"
        aria-live="polite"
        :class="{ 'kk-alert': inputValue && inputValue.length >= max }">
        {{ inputValue ? inputValue.length : 0 }} / {{ max }}
      </div>
    </label>
  </div>
</template>

<script lang="ts" setup>
  import type { ITextAreaProps } from "~/types/components";

  const { placeholder, modelValue, max, clear } = defineProps<ITextAreaProps>();
  const emit = defineEmits(["update:modelValue"]);

  const inputValue = ref(modelValue);
  const editor = ref<any>(null);

  const updateValue = () => {
    if (max && inputValue.value.length > max) {
      inputValue.value = inputValue.value.slice(0, max);
    }

    editor.value.style.height = "auto";
    editor.value.style.height = editor.value.scrollHeight + 40 + "px";
    emit("update:modelValue", inputValue.value);
  };
</script>

<style scoped>
  .kk-clear-input .kk-input-label {
    @apply border-0 hover:border-0 hover:bg-transparent p-0;
  }

  .kk-clear-input .kk-input-label:focus-within {
    @apply !bg-transparent;
  }

  .kk-input {
    @apply bg-transparent w-full focus:outline-none border-none;
  }

  .kk-dropdown {
    @apply max-w-96 xl:min-w-96;
  }

  .kk-input-label {
    @apply border-2 border-slate-700 relative rounded-3xl px-5 py-3 w-full flex items-center gap-2 hover:bg-slate-900 hover:border-blue-500 transition-colors;
  }

  textarea {
    @apply min-h-24 resize-y h-full;
  }

  .kk-input-label:focus-within {
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

  .kk-counter {
    @apply text-xs text-slate-400 font-bold absolute top-1 right-6;
  }

  .kk-alert {
    @apply text-red-400;
  }
</style>

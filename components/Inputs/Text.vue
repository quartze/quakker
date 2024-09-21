<template>
  <div class="kk-input-wrapper">
    <label class="kk-input-label">
      <Icon v-if="icon" class="text-xl" :icon="icon" />
      <input
        v-model="inputValue"
        :placeholder="placeholder + (required ? ' *' : '')"
        @change="updateValue"
        @input="updateValue"
        :type="type"
        :aria-label="ariaLabel"
        autocomplete="off"
        :aria-describedby="ariaDescribedby"
        :required="required"
        class="kk-input" />
      <div
        v-if="max"
        class="kk-counter"
        :class="{ 'kk-alert': inputValue && inputValue.length >= max }">
        {{ inputValue ? inputValue.length : 0 }} / {{ max }}
      </div>
    </label>
  </div>
</template>

<script lang="ts" setup>
  import { Icon } from "@iconify/vue";
  import type { IInputProps } from "~/types/components";

  const {
    placeholder,
    modelValue,
    icon,
    required,
    type,
    max,
    "aria-label": ariaLabel,
    "aria-describedby": ariaDescribedby,
  } = defineProps<IInputProps>();
  const emit = defineEmits(["update:modelValue"]);

  const inputValue = ref(modelValue);

  const updateValue = () => {
    if (max && inputValue.value.length > max) {
      inputValue.value = inputValue.value.slice(0, max);
    }
    emit("update:modelValue", inputValue.value);
  };
</script>

<style scoped>
  .kk-input {
    @apply bg-transparent w-full focus:outline-none border-none;
  }

  /* fix autofill browser */
  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 0s 60000000s, color 0s 60000000s !important;
  }

  .kk-dropdown {
    @apply max-w-96 xl:min-w-96;
  }

  .kk-input-label {
    @apply border-2 border-slate-700 relative rounded-full px-5 py-3 w-full flex items-center gap-2 hover:bg-slate-900 hover:border-blue-500 transition-colors;
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

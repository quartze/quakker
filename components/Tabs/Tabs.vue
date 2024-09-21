<template>
  <div class="kk-tabs-wrapper">
    <ul class="kk-tabs">
      <template v-for="(tab, key) in tabs" :key="key">
        <li
          class="kk-tab"
          :class="{
            'kk-tab-active': currentTab === tab.value
          }"
          @click="handleChangeTab(tab.value)"
        >
          {{ tab.label }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { ITabsProps } from "~/types/components";


const { tabs, modelValue } = defineProps<ITabsProps>();

const emits = defineEmits(['update:modelValue']);
const currentTab = ref(modelValue);

const handleChangeTab = (tab: string) => {
  currentTab.value = tab
  emits('update:modelValue', tab)
}

</script>

<style scoped>
.kk-tabs {
  @apply flex items-stretch justify-stretch relative overflow-scroll md:overflow-auto;
}

.kk-tab {
  @apply px-6 py-4 w-full text-center font-bold relative hover:bg-slate-800 hover:bg-opacity-50 transition-colors bg-transparent cursor-pointer;
}

.kk-tab-active {
  @apply after:w-24 after:h-1 after:rounded-full after:bg-blue-500 after:absolute after:content-[''] after:bottom-0 after:left-0 after:block after:right-0 after:mx-auto;
}
</style>
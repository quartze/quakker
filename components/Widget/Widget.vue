<template>
  <div class="kk-widget">
    <div class="kk-widget-title">
      <h2>{{ title }}</h2>
    </div>
    <div class="kk-widget-body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IWidgetProps } from '~/types/components';


const { title } = defineProps<IWidgetProps>();
</script>

<style scoped>
.kk-widget {
  @apply my-4 p-4 border border-slate-700 rounded-lg;
}

h2 {
  @apply text-xl font-bold mb-4 mt-0;
}
</style>

<template>
  <div class="kk-search-tag" @click="goToTags(tag)">
      <small>{{ position ? position + ' • ' : '' }} {{ getCategories }}</small>
      <div class="kk-tag">{{ tag }}</div>
      <ClientOnly><div class="kk-number">{{ formatNumber(count) }} postów</div></ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import { formatNumber } from '~/helpers/numbers';
import type { IPostTagsProps } from '~/types/components';


const { count, categories, tag, position } = defineProps<IPostTagsProps>();

const getCategories = computed(() => {
  return categories.join(', ')
});

const goToTags = (tag: string) => {
  navigateTo(`/search?s=${tag.replace('#', '%23')}`);
}

</script>

<style scoped>
.kk-search-tag {
  @apply py-3 cursor-pointer hover:text-blue-400 transition-colors;
}

.kk-tag {
  @apply font-bold;
}

.kk-number, small {
  @apply text-xs text-slate-400;
}
</style>
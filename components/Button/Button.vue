<template>
  <button 
    @click="handleClick" 
    class="kk-button" 
    :aria-label="ariaLabel"
    type="button"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
const emits = defineEmits(['click']);

const { ariaLabel } = defineProps<{ ariaLabel?: string }>(); 

const handleClick = () => {
  emits('click');
};
</script>

<style scoped>
.kk-button {
  /* Improved styling to support semantic, accessibility, and transitions */
  @apply flex gap-2 items-center justify-center w-full px-5 py-3 rounded-full bg-blue-700 font-semibold hover:bg-blue-800 transition-colors;
}
</style>

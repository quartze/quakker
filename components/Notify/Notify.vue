<template>
  <div :class="`kk-notify kk-notify--${type}`">
      <div class="kk-notify-icon" v-if="type !== 'clean'">
        <Icon v-if="type === 'error'" icon="material-symbols:error-outline" />
        <Icon v-if="type === 'warning'" icon="mingcute:alert-outline" />
        <Icon v-if="type === 'info'" icon="bi:info" />
        <Icon v-if="type === 'success'" icon="clarity:success-line" />
      </div>
      <div class="kk-notify-message">
        {{message}}
      </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import type { INotify } from '~/types/stores';

const { message, type } = defineProps<INotify>();
</script>

<style scoped>
.kk-notify {
  @apply px-4 py-4 font-semibold border gap-2 border-slate-700 bg-slate-950/90 rounded-lg backdrop-blur-lg flex items-center;
}

.kk-notify-icon {
  @apply w-8 h-8 text-2xl rounded-full flex items-center justify-center;
}

.kk-notify--success .kk-notify-icon {
  @apply text-green-400;
}

.kk-notify--error .kk-notify-icon {
  @apply text-red-400;
}

.kk-notify--warning .kk-notify-icon {
  @apply text-yellow-400;
}

.kk-notify--info .kk-notify-icon {
  @apply text-blue-400;
}
</style>
<template>
  <div class="kk-notify-wrapper">
      <div class="kk-notifications">
        <TransitionGroup name="fade">
          <template v-for="notification in notifications" :key="notification.id">
            <Notify :message="notification.message" :type="notification.type" :id="notification.id" :duration="notification.duration"/>
          </template>
        </TransitionGroup>
      </div>
  </div>
</template>

<script lang="ts" setup>
import { useNotify } from '~/store/notify';


const notifyStore = useNotify();
const notifications = computed(() => notifyStore.notifications);
</script>

<style scoped>
.kk-notify-wrapper {
  @apply fixed left-0 right-0 flex items-center flex-col justify-center pointer-events-none top-10 z-50;
}

.kk-notifications {
  @apply flex items-center flex-col justify-center gap-2;
}
</style>
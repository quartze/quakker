<template>
  <div class="kk-username-badge">
    <ClientOnly>
      <Popper arrow class="cursor-pointer" v-if="type === IUserBadgeType.VERIFIED">
        <Icon class="text-2xl text-blue-400 -mb-1.5" icon="bxs:badge-check" />
        <template #content>
          <div class="kk-dropdown text-base font-normal">
            <strong>Użytkownik zweryfikowany</strong>
            <p class="kk-dropdown-desc">
              Ten użytkownik jest zweryfikowanym członkiem Quakkera. Konto to, jest oficjalnym
              kontem osoby publicznej lub firmy.
            </p>
          </div>
        </template>
      </Popper>
      <Popper arrow class="cursor-pointer" v-if="type === IUserBadgeType.ADMIN">
        <Icon class="text-3xl text-red-400 -mb-1.5" icon="mdi:duck" />
        <template #content>
          <div class="kk-dropdown text-base font-normal">
            <strong>Członek administracji</strong>
            <p class="kk-dropdown-desc">Jest to oficjalne konto administratora.</p>
          </div>
        </template>
      </Popper>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
  import Popper from "vue3-popper";
  import { Icon } from "@iconify/vue";
  import type { IUserBadgeProps, IUserBadgeType } from "~/types/components";

  const { type } = defineProps<IUserBadgeProps>();
</script>

<style></style>

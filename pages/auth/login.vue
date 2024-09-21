<template>
  <div class="kk-page-login">
    <div class="kk-logo">
      <Icon icon="mdi:duck" />
    </div>
    <div class="kk-content-wrapper">
      <div class="kk-content">
        <h1>Najświeższe kacze nowości ze świata</h1>
        <h2>Dołącz już dziś.</h2>

        <div class="kk-forms">
          <FormLogin>
            <Button>Zaloguj się</Button>
          </FormLogin>
          <FormRegister>
            <Button>Utwórz konto</Button>
          </FormRegister>
          <small
            >Rejestrując się, zgadzasz się na
            <NuxtLink to="/support/terms">Warunki korzystania</NuxtLink> i
            <NuxtLink to="/support/privacy">Politykę prywatności</NuxtLink>, łącznie z
            <NuxtLink to="/support/cookies">Polityką ciasteczek</NuxtLink></small
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Icon } from "@iconify/vue";

  // Login
  const emailLogin = ref("");
  const passwordLogin = ref("");

  // Register
  const passwordRegister = ref("");
  const confirmPasswordRegister = ref("");
  const usernameRegister = ref("");

  definePageMeta({
    layout: "clear",
  });

  useHead({
    title: "Witaj na Quakker!",
  });
</script>

<style scoped>
  .kk-page-login {
    @apply w-screen h-screen lg:grid grid-cols-2 items-center justify-center;
  }

  .kk-logo {
    @apply text-6xl my-8 lg:my-auto lg:text-9xl text-blue-400 flex items-center justify-center;
  }

  .kk-content {
    @apply text-center lg:text-left px-12 py-8 lg:p-0 lg:max-w-[600px];
  }

  h1 {
    @apply text-6xl;
  }

  h2 {
    @apply mb-12 text-3xl;
  }

  .kk-forms {
    @apply lg:max-w-80 flex flex-col gap-4;
  }

  small {
    @apply text-xs text-slate-400;
  }

  a {
    @apply text-blue-400 underline;
  }
</style>

<template>
  <Popup>
    <template #trigger>
      <slot />
    </template>

    <template #body>
      <h3 class="kk-popup-title">Zarejestruj się w serwisie!</h3>
      <div class="kk-form">
        <InputsText
          icon="mdi-light:email"
          placeholder="Adres e-mail"
          v-model="emailLogin"
          type="email"
          aria-label="Adres e-mail"
          required
        />

        <InputsText
          icon="ph:user"
          placeholder="Nazwa użytkownika"
          v-model="usernameRegister"
          :max="15"
          type="text"
          aria-label="Nazwa użytkownika"
          maxlength="15"
          required
        />

        <InputsText
          icon="akar-icons:key"
          placeholder="Hasło"
          v-model="passwordRegister"
          type="password"
          aria-label="Hasło"
          required
        />

        <InputsText
          icon="akar-icons:key"
          placeholder="Powtórz hasło"
          v-model="confirmPasswordRegister"
          type="password"
          aria-label="Powtórz hasło"
          required
        />

        <Button>Zarejestruj się</Button>
      </div>
    </template>
  </Popup>
</template>

<script lang="ts" setup>

const emailLogin = ref('');
const usernameRegister = ref('');
const passwordRegister = ref('');
const confirmPasswordRegister = ref('');
</script>

<style scoped>
.kk-form {
  @apply my-8 flex flex-col gap-4;
}

small {
  @apply text-xs text-slate-400;
}
</style>

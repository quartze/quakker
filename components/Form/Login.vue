<template>
  <Popup>
    <template #trigger>
      <slot />
    </template>

    <template #body>
      <h3 class="kk-popup-title">Zaloguj się do serwisu</h3>
      <div class="kk-form">
        <InputsText
          icon="mdi-light:email"
          placeholder="Adres e-mail"
          v-model="emailLogin"
          type="text"
          aria-label="Adres e-mail"
          aria-describedby="emailHelp"
        />
        <InputsText
          icon="akar-icons:key"
          placeholder="Hasło"
          v-model="emailPassword"
          type="password"
          aria-label="Hasło"
          aria-describedby="passwordHelp"
        />
        <Button>Zaloguj się</Button>
        <small>
          Nie pamiętasz hasła?
          <button 
            type="button" 
            class="text-blue-500 underline" 
            aria-label="Przypomnij sobie hasło"
            role="link"
          >
            Przypomnij sobie!
          </button>
        </small>
      </div>
    </template>
  </Popup>
</template>

<script lang="ts" setup>

const emailLogin = ref('');
const emailPassword = ref('');
</script>

<style scoped>
.kk-form {
  @apply my-8 flex flex-col gap-4;
}

small {
  @apply text-xs text-slate-400;
}
</style>

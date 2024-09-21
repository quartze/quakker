<template>
  <div class="terms-of-use">
    <h1>Zasady użytkowania</h1>
    <div class="terms-of-use__content">
      <h2>1. Introduction</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis metus id urna
        ultricies, vitae aliquet enim pulvinar. Proin at tortor nec felis tincidunt faucibus ac eget
        nulla.
      </p>

      <h2>2. User Obligations</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis vestibulum enim,
        ac cursus velit. Donec dapibus sapien in orci pharetra, quis interdum metus elementum. Sed
        ut arcu vel metus feugiat eleifend.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    layout: "pages",
  });

  useHead({
    title: "Zasady użytkowania - Quakker",
  });
</script>

<style scoped>
  .terms-of-use {
    @apply max-w-[800px] my-24 mx-auto;
  }
</style>

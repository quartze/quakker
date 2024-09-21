<template>
  <div class="terms-of-use">
    <h1>Ciasteczka</h1>
    <div class="terms-of-use__content">
      <h2>1. Introduction</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sapien id justo
        vestibulum, ac tincidunt purus vehicula. This policy explains what cookies are, how we use
        them, and your choices regarding cookies.
      </p>

      <h2>2. What Are Cookies?</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cookies are small text files stored
        on your device by your web browser. They help us provide a better user experience by
        remembering your preferences and settings.
      </p>

      <h2>3. How We Use Cookies</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. We use cookies to enhance your
        experience, analyze site traffic, and personalize content. Some cookies are necessary for
        the functioning of our website, while others help us improve its performance.
      </p>

      <h2>4. Types of Cookies We Use</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. We use both session and persistent
        cookies. Session cookies expire when you close your browser, while persistent cookies remain
        on your device until deleted.
      </p>

      <h2>5. Managing Cookies</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. You can manage cookie preferences
        through your browser settings. Note that disabling cookies may affect the functionality of
        our website.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. If you have any questions about our
        use of cookies, please contact us at support@example.com.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    layout: "pages",
  });

  useHead({
    title: "Polityka ciasteczek - Quakker",
  });
</script>

<style scoped>
  .terms-of-use {
    @apply max-w-[800px] my-24 mx-auto;
  }
</style>

<template>
  <div class="terms-of-use">
    <h1>Polityka prywatności</h1>
    <div class="terms-of-use__content">
      <h2>1. Introduction</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec erat in urna
        convallis suscipit. Maecenas euismod ligula at bibendum pulvinar. Quisque convallis ex non
        orci pharetra, id elementum magna fermentum.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel dui et justo congue
        molestie. Proin convallis erat at mauris fermentum, sed lacinia massa fringilla. Nullam in
        magna vel nunc vestibulum vestibulum.
      </p>

      <h2>3. How We Use Your Information</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt nunc a sem gravida,
        nec cursus tortor viverra. Etiam ullamcorper sapien vitae lacus vulputate, at luctus elit
        laoreet.
      </p>

      <h2>4. Data Security</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper massa eget magna
        finibus, id sagittis turpis scelerisque. Fusce consequat arcu ac lectus feugiat, at
        ultricies leo hendrerit.
      </p>

      <h2>5. Contact Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat neque non
        malesuada dapibus. Sed euismod velit sed felis venenatis, non cursus mi laoreet.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    layout: "pages",
  });

  useHead({
    title: "Polityka prywatności - Quakker",
  });
</script>

<style scoped>
  .terms-of-use {
    @apply max-w-[800px] my-24 mx-auto;
  }
</style>

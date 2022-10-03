<template>
  <div class="grid grid-cols-4 gap-4 ml-3">
    <nuxt-link to="/iphone/iphone-13" class="shadow-lg p-4">
      <h1>I Phone 13</h1>
      <img width="200" src="images/iphone-13.webp" alt="" />
    </nuxt-link>
    <nuxt-link to="/iphone/iphone-12" class="shadow-lg p-4">
      <h1>I Phone 12</h1>
      <img width="200" src="images/iphone-12.webp" alt="" />
    </nuxt-link>
  </div>
</template>

<script setup>
useHead({
  title: "Nuxt3 - Iphones",
});
</script>

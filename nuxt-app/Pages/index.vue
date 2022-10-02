<template>
  <div>
    <NuxtLink to="/">Home Page</NuxtLink>
    <NuxtLink to="/about">About Page</NuxtLink>

    <button @click="moveToAbout">Move to About Page</button>

    Hello Index
  </div>
</template>

<script setup>
function moveToAbout() {
  navigateTo("about");
}
</script>

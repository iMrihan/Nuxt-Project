<template>
  <div>
    <button @click="moveToAbout">Move to About Page</button>

    Hello Index
  </div>
</template>

<script setup>
function moveToAbout() {
  navigateTo("about");
}
</script>

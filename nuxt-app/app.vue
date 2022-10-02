<template>
  <div>
    <button @click="Toggle">Toggle</button>
    <NuxtPage />
    <component :is="MyComponent" />
  </div>
</template>

<script setup>
const MyComponent = ref(resolveComponent("Counter"));

function Toggle() {
  MyComponent.value = resolveComponent("HomeWelcome");
}
</script>

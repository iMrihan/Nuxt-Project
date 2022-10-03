<template>
  <NuxtLayout>
    <div>
      <!-- <button @click="Toggle">Toggle</button> -->
      <NuxtPage />
      <!-- <component :is="MyComponent" /> -->
    </div>
  </NuxtLayout>
</template>

<script setup>
const MyComponent = shallowRef(resolveComponent("Counter"));

function Toggle() {
  MyComponent.value = resolveComponent("HomeWelcome");
}
</script>

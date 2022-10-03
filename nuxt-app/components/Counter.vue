<template>
  <div>
    <button @click="increment">Increment</button>
    {{ count }}

    <button @click="decrement">Decrement</button>
  </div>
</template>

<script setup>
const count = shallowRef(0);

function increment() {
  count.value++;
}

function decrement() {
  if (count.value >= 1) {
    count.value--;
  }
}
</script>

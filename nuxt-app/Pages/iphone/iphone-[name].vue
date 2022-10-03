<template>
  <div>
    <Head>
      <Title>Nuxt 3 - Iphone {{ name }}</Title>
    </Head>
    <div class="flex justify-center w-full mt-20">
      <div class="grid grid-cols-2">
        <div>
          <img
            :src="`/images/iphone-${route.params.name.trim()}.webp`"
            alt=""
          />
        </div>
        <div class="tex-center">
          <h1 class="text-3xl">I Phone {{ name }}</h1>
          <button class="p-3 bg-indigo-900 text-white rounded-md mt-5 w-48">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const name = computed(() => {
  console.log("test:", route.params.name);
  return route.params.name.replaceAll("-", " ");
});

// useHead({
//   title: `Nuxt3 - ${route.params.name}`,
// });
</script>

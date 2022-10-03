<template>
  <div>
    <nav
      class="bg-purple-700 shadow-lg p-3 text-white text-lg flex justify-between"
    >
      <NuxtLink to="/">Home Page</NuxtLink>

      <NuxtLink to="/about">About Page</NuxtLink>
      <NuxtLink to="/iphone">Iphones</NuxtLink>

      <NuxtLink to="/profile">Profile Page</NuxtLink>
    </nav>

    <slot />
  </div>
</template>

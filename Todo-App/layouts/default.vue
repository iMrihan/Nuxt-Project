<template>
  <div>
    <nav class="text-white bg-gray-800">
      <header>
        <div class="container mx-auto">
          <div class="flex items-center">
            <nuxt-link to="/" class="router-link">Home</nuxt-link>

            <div v-if="!token">
              <nuxt-link v-if="!token" to="/login" class="router-link"
                >Login</nuxt-link
              >
              <nuxt-link v-if="!token" to="/signup" class="router-link"
                >Sign Up</nuxt-link
              >
            </div>

            <div v-else>
              <a @click="logout">Logout</a>
            </div>
          </div>
        </div>
      </header>
    </nav>

    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      token: null,
    }
  },
  mounted() {
    if (localStorage.getItem('loginData')) {
      try {
        this.token = JSON.parse(localStorage.getItem('loginData'))
      } catch (e) {
        localStorage.removeItem('cats')
      }
    }
  },

  methods: {
    logout() {
      if (this.token) {
        localStorage.clear()
        this.$router.push('/login')
        window.location.reload(true)
      }
    },
  },
})
</script>

<style lang="postcss">
/*
Common styles for all components (not scoped)
*/

.router-link {
  @apply inline-block px-16 py-4 transition-colors duration-500 cursor-pointer;
}

.router-link:hover {
  @apply bg-gray-500;
}

h1 {
  @apply pt-4 pb-4 text-4xl font-bold text-center;
}
main {
  @apply text-lg text-center;
}

/* 
Button styles 
*/

button {
  @apply mt-4 px-4 py-2 font-bold text-white rounded;
}
.btn-standard {
  @apply bg-blue-500;
}
.btn-error {
  @apply bg-red-500;
}
.btn-standard:hover {
  @apply bg-blue-700;
}
.btn-error:hover {
  @apply bg-red-700;
}
</style>

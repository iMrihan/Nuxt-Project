<template>
  <form @submit.prevent="submitForm" class="flex flex-col p-2 h-screen">
    <div class="max-w-md m-auto">
      <h1 class="text-5xl text-center">Login Page</h1>

      <div class="border p-5 my-5 rounded">
        <div>
          <label class="block mb-2">Email</label>
          <input
            type="text"
            class="border rounded py-2 px-3 w-full focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            v-model="email"
            required
          />
        </div>
        <div class="py-2">
          <label class="block mb-2">Password</label>
          <input
            type="password"
            class="border rounded py-2 px-3 w-full focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            v-model="password"
            required
          />
        </div>
        <div class="py-2">
          <button
            type="submit"
            class="w-full rounded bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border-solid border-2 border-green-600"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  middleware: 'notAuthenticated',
  data() {
    return {
      email: '',
      password: '',
      message: '',
    }
  },

  methods: {
    async submitForm() {
      try {
        const { data } = await axios.post(
          'https://nuxt-todo-ap.herokuapp.com/user/login',
          {
            email: this.email,
            password: this.password,
          }
        )

        if (data.email) {
          localStorage.setItem('loginData', JSON.stringify(data.token))
          this.$router.push('/')
          window.location.reload(true)
        }
      } catch (error) {
        alert('User not found')
        this.$router.push('/signup')
      }
    },
  },

  created() {},
}
</script>

<style></style>

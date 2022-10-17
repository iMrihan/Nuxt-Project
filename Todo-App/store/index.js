// export const state = () => {
//   return {
//     auth: JSON.parse(localStorage.getItem('loginData') || undefined),
//   }
// }
// export const mutations = {
//   setAuth(state, auth) {
//     state.auth = auth
//   },
// }
// export const actions = {
//   nuxtServerInit({ commit }) {
//     let auth = null
//     const ISSERVER = typeof window === 'undefined'
//     if (!ISSERVER) {
//       console.log('You are on the browser')
//       auth = JSON.parse(localStorage.getItem('loginData'))

//       // 👉️ can use localStorage here
//     } else {
//       console.log('You are on the server')
//       // 👉️ can't use localStorage
//     }

//     commit('setAuth', auth)
//   },
// }

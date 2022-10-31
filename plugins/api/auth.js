export default function ({ $axios }, inject) {
  const api = {
    async login(userData) {
      const { data } = await $axios.post('/auth/login', userData)
      return data
    },

    async signup(userData) {
      const { data } = await $axios.post('/auth/signup', userData)
      return data
    },
  }

  inject('apiAuth', api)
}

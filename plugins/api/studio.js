export default function ({ $axios }, inject) {
  const path = "/studios"

  const api = {
    async getTypes() {
      const { data } = await $axios.get(`${path}/types`)
      return data
    },

    async getAll() {
      const { data } = await $axios.get(path)
      return data
    },

    async get(id) {
      const { data } = await $axios.get(`${path}/${id}`)
      return data
    },

    async create(studio) {
      const { data } = await $axios.post(path, studio)
      return data
    },

    async update(id, studio) {
      const { data } = await $axios.patch(`${path}/${id}`, studio)
      return data
    },
  }

  inject("apiStudio", api)
}

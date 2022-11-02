export default function ({ $axios }, inject) {
  const path = "/rooms"

  const api = {
    async getTypes() {
      const { data } = await $axios.get(`${path}/types`)
      return data
    },

    async getByStudio(studioId) {
      const { data } = await $axios.get(`${path}/studio/${studioId}`)
      return data
    },

    async get(id) {
      const { data } = await $axios.get(`${path}/${id}`)
      return data
    },

    async create(room) {
      const { data } = await $axios.post(path, room)
      return data
    },

    async update(id, room) {
      const { data } = await $axios.patch(`${path}/${id}`, room)
      return data
    },
  }

  inject("apiRoom", api)
}

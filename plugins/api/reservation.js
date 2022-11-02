export default function ({ $axios }, inject) {
  const path = "/reservations"

  const api = {
    async getTypes() {
      const { data } = await $axios.get(`${path}/types`)
      return data
    },
  }

  inject("apiReservation", api)
}

export default ({ $axios, env }, inject) => {
  // const path = '/addresses'

  const api = {
    async getByCep(cep) {
      const { data } = await $axios.get(`${env.addressUrl}/${cep}/json`)
      return data
    },
  }

  inject("apiAddress", { ...api })
}

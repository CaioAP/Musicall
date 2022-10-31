export default function ({ $axios }, inject) {
  const api = {
    async create(course) {
      const { data } = await $axios.post('')
      return data
    },
  }

  inject('apiCourse', api)
}

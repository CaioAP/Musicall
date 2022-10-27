export const state = () => ({
  user: {
    id: '',
    name: '',
  },
})

export const getters = {
  getUser: (state) => state.user,
}

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
}

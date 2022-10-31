export const state = () => ({
  type: 'success',
  message: '',
  delay: 5,
  open: false,
})

export const getters = {
  alert: (state) => state,
}

export const mutations = {
  SET_ALERT(state, alert) {
    state.type = alert.type
    state.message = alert.message
    state.delay = alert.delay || state.delay
    state.open = true
  },

  SET_CLOSE(state) {
    state.open = false
  },
}

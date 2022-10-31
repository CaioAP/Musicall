import role from '~/assets/data/role.js'

export const state = () => ({
  role: null,
  id: null,
  name: null,
  session: null,
})

export const getters = {
  role: (state) => state.role,
  id: (state) => state.id,
  name: (state) => state.name,
  session: (state) => state.session,
}

export const mutations = {
  SET_ROLE(state, role) {
    state.role = role
  },
  SET_ID(state, id) {
    state.id = id
  },
  SET_NAME(state, name) {
    state.name = name
  },
  SET_SESSION(state, session) {
    state.session = session
  },
}

export const actions = {
  async login({ dispatch }, payload) {
    const data = await this.$apiAuth.login(payload)

    dispatch('setSession', data)
    dispatch('setAccessToken', data)

    return data
  },

  setSession({ commit }, payload) {
    const session = {
      role: payload.role,
      id: payload.id,
      name: payload.name,
    }

    commit('SET_ID', payload.id)
    commit('SET_NAME', payload.name)
    commit('SET_ROLE', payload.role)
    commit('SET_SESSION', session)

    this.$cookiz.set('SESSION', session)
  },

  setAccessToken(context, payload) {
    this.$cookiz.set('ACCESS_TOKEN', payload.accessToken)
    this.$axios.setToken(payload.accessToken, 'Bearer')
  },

  signout({ commit }) {
    this.$cookiz.remove('SESSION')
    this.$cookiz.remove('ACCESS_TOKEN')

    commit('SET_ID', null)
    commit('SET_NAME', null)
    commit('SET_ROLE', null)
    commit('SET_SESSION', null)
  },

  async signupAdmin({ dispatch }, payload) {
    payload = {
      ...payload,
      acesso: role.ADMIN,
    }

    return await dispatch('signup', payload)
  },

  async signupUser({ dispatch }, payload) {
    payload = {
      ...payload,
      acesso: role.USER,
    }

    return await dispatch('signup', payload)
  },

  async signup({ dispatch }, payload) {
    const data = await this.$apiAuth.signup(payload)

    dispatch('setSession', data)
    dispatch('setAccessToken', data)

    return data
  },
}

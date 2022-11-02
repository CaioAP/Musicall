export const state = () => ({
  id: null,
  roomId: null,
})

export const getters = {
  id: (state) => state.id,
  room: (state) => state.roomId,
}

export const mutations = {
  SET_ID(state, id) {
    state.id = id
  },
  SET_ROOM(state, id) {
    state.roomId = id
  },
}

export const actions = {
  setStudio({ commit }, payload) {
    commit("SET_ID", payload)
    this.$cookiz.set("STUDIO", { id: payload })
  },

  async getStudio({ commit }) {
    const studio = await this.$cookiz.get("STUDIO")

    if (studio?.id) {
      commit("SET_ID", studio.id)
      return studio.id
    }

    return null
  },

  setRoom({ state, commit }, payload) {
    commit("SET_ROOM", payload)
    this.$cookiz.set("STUDIO", {
      id: state.id,
      room: payload,
    })
  },

  getRoom({ commit }) {
    const studio = this.$cookiz.get("STUDIO")

    if (studio?.room) {
      commit("SET_ROOM", studio.room)
      return studio.room
    }

    return null
  },
}

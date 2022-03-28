const SET_LOADER = 'SET_LOADER'

export const state = () => ({
  loader: false,
  data: [],
  character: {}
})

export const mutations = {
  SET_LOADER (state, value) {
    state.loader = value
  },
  SET_CHARACTERS (state, characters) {
    state.data = characters
  },
  SET_CHARACTER (state, character) {
    state.character = character
  }
}

export const actions = {
  setLoader ({ commit }, value) {
    commit(SET_LOADER, value)
  }
}

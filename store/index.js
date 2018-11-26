import Vuex from 'vuex'

const appStore = () => {
  return new Vuex.Store({
    strict: true,
    state: () => ({
      form: {
        zip: ''
      }
    }),
    mutations: {
      updateZip(state) {
        state.form.zip
      }
    }
  })
}

export default appStore

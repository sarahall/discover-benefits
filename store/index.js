import Vuex from 'vuex'

const appStore = () => {
  return new Vuex.Store({
    strict: true,
    state: {
      form: {
        zip: ''
      }
    }
  })
}

export default appStore

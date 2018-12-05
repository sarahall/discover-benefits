import Vuex from 'vuex'

const appStore = () => {
  return new Vuex.Store({
    strict: true,
    state: () => ({
      form: {
        age: '',
        disability: '',
        disclaimer: '',
        frequency: '',
        grossIncome: '',
        deed: '',
        housing: '',
        householdSize: '',
        lease: '',
        marital: '',
        other: '',
        properties: '',
        residence: '',
        singleFamily: '',
        spouseAge: '',
        waterBill: '',
        where: '',
        widowedAge: '',
        who: '',
        yearsLived: '',
        zip: '',
        moreIncome: {
          //theirIncome: '',
          //theirFrequency: ''
        }
      }
    }),
    mutations: {
      updateForm (state, { setting, value } ) {
        console.log(value)
        state.form[setting] = value
      },
      updateIncome(state, notification) {
        state.push(notification)
      }
    }
  })
}

export default appStore

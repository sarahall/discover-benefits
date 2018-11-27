import Vuex from 'vuex'

const appStore = () => {
  return new Vuex.Store({
    strict: true,
    state: () => ({
      form: {
        age: '',
        disability: '',
        grossIncome: '',
        housing0tatus: '',
        numberInHousehold: '',
        marital: '',
        waterBill: '',
        yearsLived: '',
        zip: ''
      }
    }),
    //TODO: Refactor this
    mutations: {
      updateAge(state, age) {
        console.log(age)
        state.form.age = age
      },
      updateDisability(state, disability) {
        console.log(disability)
        state.form.disability = disability
      },
      updateHousing(state, housing) {
        console.log(housing)
        state.form.housing = housing
      },
      updateMarital(state, marital) {
        console.log(marital)
        state.form.marital = marital
      },
      updateYearsLived(state, yearsLived) {
        console.log(yearsLived)
        state.form.yearsLived = yearsLived
      },
      updateZip(state, zip) {
        console.log(zip)
        state.form.zip = zip
      }
    }
  })
}

export default appStore

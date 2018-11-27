import Vuex from 'vuex'

const appStore = () => {
  return new Vuex.Store({
    strict: true,
    state: () => ({
      form: {
        age: '',
        disability: '',
        grossIncome: '',
        housingStatus: '',
        numberInHousehold: '',
        martialStatus: '',
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
      updateHousingStatus(state, housingStatus) {
        console.log(housingStatus)
        state.form.housingStatus = housingStatus
      },
      updateMaritalStatus(state, martialStatus) {
        console.log(martialStatus)
        state.form.martialStatus = martialStatus
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

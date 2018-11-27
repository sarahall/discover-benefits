import Vuex from 'vuex'

const appStore = () => {
  return new Vuex.Store({
    strict: true,
    state: () => ({
      form: {
        age: '',
        disability: '',
        frequency: '',
        grossIncome: '',
        housing: '',
        householdSize: '',
        marital: '',
        residence: '',
        waterBill: '',
        where: '',
        who: '',
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
      updateFrequency(state, frequency) {
        console.log(frequency)
        state.form.frequency = frequency
      },
      updateGrossIncome(state, grossIncome) {
        console.log(grossIncome)
        state.form.grossIncome = grossIncome
      },
      updateHousing(state, housing) {
        console.log(housing)
        state.form.housing = housing
      },
      updateHouseholdSize(state, householdSize) {
        console.log(householdSize)
        state.form.householdSize = householdSize
      },
      updateMarital(state, marital) {
        console.log(marital)
        state.form.marital = marital
      },
      updateResidence(state, residence) {
        state.form.residence = residence
      },
      updateWhere(state, where) {
        state.form.where = where
      },
      updateWho(state, who) {
        state.form.who = who
      },
      updateWaterBill(state, waterBill) {
        console.log(waterBill)
        state.form.waterBill = waterBill
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

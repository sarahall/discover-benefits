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
        zip: ''
      }
    }),
    //TODO: Refactor this
    mutations: {
      updateAge(state, age) {
        console.log(age)
        state.form.age = age
      },
      updateDeed(state, deed) {
        console.log(deed)
        state.form.deed = deed
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
      updateLease(state, lease) {
        console.log(lease)
        state.form.lease = lease
      },
      updateMarital(state, marital) {
        console.log(marital)
        state.form.marital = marital
      },
      updateOther(state, other) {
        console.log(other)
        state.form.other = other
      },
      updateProperties(state, properties) {
        console.log(properties)
        state.form.properties = properties
      },
      updateResidence(state, residence) {
        state.form.residence = residence
      },
      updateSingleFamily(state, singleFamily) {
        console.log(singleFamily)
        state.form.spouseAge = singleFamily
      },
      updateSpouseAge(state, spouseAge) {
        console.log(spouseAge)
        state.form.spouseAge = spouseAge
      },
      updateWhere(state, where) {
        state.form.where = where
      },
      updateWho(state, who) {
        state.form.who = who
      },
      updateWidowedAge(state, widowedAge) {
        state.form.widowedAge = widowedAge
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

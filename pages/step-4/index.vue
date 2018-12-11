<template>
  <section>
    <ProgressBar
      :step="4" />
    <h1>About your household</h1>
    <p class="helper-text">
      Almost done! To finish, tell us a few details about your household.
    </p>
    <div class="question">
      <label for="household-size"><h2>How many people are in your household?</h2></label>
      <p class="helper-text">
        Include both adults and children in your count.
      </p>
      <select
        id="household-size"
        v-model="householdSize">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8+</option>
      </select>
    </div>
    <div class="question">
      <h2>Does anyone in your household have a physical disability?</h2>
      <input
        id="disabled"
        v-model="disability"
        type="radio"
        name="disability"
        value="Yes">
      <label
        for="disabled">Yes</label><br>
      <input
        id="not-disabled"
        v-model="disability"
        type="radio"
        name="disability"
        value="No">
      <label
        for="not-disabled">No</label>
    </div>
    <div class="question">
      <label for="household-income"><h2>What is your household’s gross income?</h2></label>
      <p class="helper-text">
        Your gross income is the total amount of money you earn before taxes. You can provide an estimate.
      </p>
      <input
        id="household-income"
        v-model="grossIncome"
        class="income"
        name="grossIncome"
        type="text"
        required
        @keyup="formatIncome">
    </div>
    <div class="question">
      <h2>How often do you receive the income you entered?</h2>
      <select
        id="frequency"
        v-model="frequency"
        class="frequency">
        <option
          disabled
          value="">Please select one</option>
        <option>Every week</option>
        <option>Every 2 weeks</option>
        <option>Every month</option>
        <option>Every year</option>
      </select>
    </div>

    <div
      v-for="(income, index) in moreIncome"
      :key="index"
      class="more-income">

      <div class="question">
        <label for="household-income"><h2>What is their gross income?</h2></label>
        <input
          :id="'income-' + index"
          v-model="income.theirIncome"
          class="income"
          type="number"
          step="0.01"
          required>
      </div>
      <div class="question">
        <h2>How often do they receive the income?</h2>
        <select
          :id="'frequency-' + index"
          v-model="income.theirFrequency"
          class="frequency">
          <option
            disabled
            value="">Please select one</option>
          <option>Every week</option>
          <option>Every 2 weeks</option>
          <option>Every month</option>
          <option>Every year</option>
        </select>
      </div>
    </div>
    <div
      class="add-more"
      @click="addIncome">
      <a>+ Add another person's income</a>
    </div>


    <nuxt-link
      :class="isDisabled"
      class="button"
      to="/review">Confirm your answers <i class="far fa-arrow-right"></i></nuxt-link>
    <nuxt-link
      to="/step-3"
      class="prev-button"><i class="far fa-arrow-left"></i> Back</nuxt-link>
  </section>
</template>

<script>
import ProgressBar from '~/components/ProgressBar.vue'

export default {
  components: {
    ProgressBar
  },
  data() {
    return {
      step: 5,
      counter: 0,
      moreIncome: []
    }
  },
  computed: {
    isDisabled() {
      return {
        disabled: this.householdSize === '' || this.grossIncome === '' || this.frequency === ''
      }
    },
    householdSize: {
      get() {
        return this.$store.state.form.householdSize
      },
      set(value) {
        this.$store.commit('updateForm', { setting: 'householdSize', value: value })
      }
    },
    disability: {
      get() {
        return this.$store.state.form.disability
      },
      set(value) {
        this.$store.commit('updateForm', { setting: 'disability', value: value })
      }
    },
    grossIncome: {
      get() {
        return this.$store.state.form.grossIncome
      },
      set(value) {
        this.$store.commit('updateForm', { setting: 'grossIncome', value: value })
      }
    },
    frequency: {
      get() {
        return this.$store.state.form.frequency
      },
      set(value) {
        this.$store.commit('updateForm', { setting: 'frequency', value: value })
      }
    }
  },
  methods: {
    addIncome() {
       this.moreIncome.push({
           theirIncome: '',
           theirFrequency: '',
       })
     },
    currencyFormat(value) {
      //return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
      },
    formatIncome(value) {
      //this.grossIncome = this.currencyFormat(this.grossIncome)

   }
  }
}
</script>

<style>
#household-size {
  width: 4rem;
}
.income {
  width: 20rem;
}
.frequency {
  width: 20rem;
}
</style>

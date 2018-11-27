<template>
  <!-- eslint-disable vue/html-self-closing -->
  <section>
    <ProgressBar
      :step="4" />
    <h1>About your home</h1>
    <p class="helper-text">
      Now, let’s learn more about the place where you live.
    </p>

    <div class="question">
      <h2>Do you rent or own the place where you live?</h2>
      <input
        id="rent"
        v-model="housing"
        type="radio"
        name="housing"
        value="rent">
      <label
        for="rent">I rent it.</label><br>
      <input
        id="own"
        v-model="housing"
        type="radio"
        name="housing"
        value="own">
      <label
        for="own">I own it.</label><br>
      <input
        id="neither"
        v-model="housing"
        type="radio"
        name="housing"
        value="neither">
      <label
        for="neither">I do not rent or own.</label>
    </div>
    {{ housing }}

    <div class="question">
      <label
        for="years-lived"><h2>How many years have you lived in your primary residence?</h2></label>
      <input
        id="years-lived"
        v-model.number="yearsLived"
        name="yearsLived"
        type="number"
        min="1"
        max="100">
    </div>

    <div class="question">
      <h2>Are you up to date on your water bill?</h2>
      <input
        id="water-bill-paid"
        v-model="waterBill"
        type="radio"
        name="waterBill"
        value="paid">
      <label
        for="water-bill-paid">Yes</label><br>
      <input
        id="water-bill-unpaid"
        v-model="waterBill"
        type="radio"
        name="waterBill"
        value="unpaid">
      <label
        for="water-bill-unpaid">No</label>
    </div>

    <nuxt-link
      :class="isDisabled"
      class="button"
      to="/step-5">Next <i class="far fa-arrow-right"></i></nuxt-link>
    <nuxt-link
      to="/step-3"
      class="prev-button"><i class="far fa-arrow-left"></i> Previous question</nuxt-link>
  </section>
</template>

<script>
import ProgressBar from '~/components/ProgressBar.vue'

export default {
  components: {
    ProgressBar
  },
  computed: {
    isDisabled() {
      return {
        disabled:
          this.housing === '' || this.yearsLived === '' || this.waterBill === ''
      }
    },
    housing: {
      get() {
        return this.$store.state.form.housing
      },
      set(value) {
        console.log(value)
        this.$store.commit('updateHousing', value)
      }
    },
    yearsLived: {
      get() {
        return this.$store.state.form.yearsLived
      },
      set(value) {
        console.log(value)
        this.$store.commit('updateYearsLived', value)
      }
    },
    waterBill: {
      get() {
        return this.$store.state.form.waterBill
      },
      set(value) {
        console.log(value)
        this.$store.commit('updateWaterBill', value)
      }
    }
  }
}
</script>

<style>
#years-lived {
  width: 5rem;
}
</style>

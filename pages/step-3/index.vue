<template>
  <section>
    <ProgressBar
      :step="3" />
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
        value="Rent">
      <label
        for="rent">I rent it.</label><br>
      <input
        id="own"
        v-model="housing"
        type="radio"
        name="housing"
        value="Own">
      <label
        for="own">I own it.</label><br>
      <input
        id="neither"
        v-model="housing"
        type="radio"
        name="housing"
        value="Neither">
      <label
        for="neither">I do not rent or own.</label>
    </div>

    <div v-if="housing === 'Own'">
      <div class="question">
        <h2>Is it a single family home?</h2>
        <input
          id="single-family"
          v-model="singleFamily"
          type="radio"
          name="single-family"
          value="Yes">
        <label
          for="single-family">Yes</label><br>
        <input
          id="not-single-family"
          v-model="singleFamily"
          type="radio"
          name="single-family"
          value="No">
        <label
          for="not-single-family">No</label><br>
      </div>

      <div class="question">
        <h2>Is your name on the deed?</h2>
        <input
          id="name-on-deed"
          v-model="deed"
          type="radio"
          name="deed"
          value="Yes">
        <label
          for="name-on-deed">Yes</label><br>
        <input
          id="name-not-on-deed"
          v-model="deed"
          type="radio"
          name="deed"
          value="No">
        <label
          for="name-not-on-deed">No</label><br>
      </div>

      <div class="question">
        <h2>Do you own any other properties?</h2>
        <input
          id="more-properties"
          v-model="properties"
          type="radio"
          name="properties"
          value="Yes">
        <label
          for="more-properties">Yes</label><br>
        <input
          id="no-more-properties"
          v-model="properties"
          type="radio"
          name="properties"
          value="No">
        <label
          for="no-more-properties">No</label><br>
      </div>
    </div>

    <div
      v-if="housing === 'Rent'"
      class="question">
      <h2>Is your name on the lease?</h2>
      <input
        id="lease"
        v-model="lease"
        type="radio"
        name="lease"
        value="Yes">
      <label
        for="lease">Yes</label><br>
      <input
        id="no-lease"
        v-model="lease"
        type="radio"
        name="lease"
        value="No">
      <label
        for="no-lease">No</label><br>
    </div>

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
        value="Yes">
      <label
        for="water-bill-paid">Yes</label><br>
      <input
        id="water-bill-unpaid"
        v-model="waterBill"
        type="radio"
        name="waterBill"
        value="Yes">
      <label
        for="water-bill-unpaid">No</label>
    </div>

    <nuxt-link
      :class="isDisabled"
      class="button"
      to="/step-4">Next <i class="far fa-arrow-right"></i></nuxt-link>
    <nuxt-link
      to="/step-2"
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
      if ( this.housing === 'Own' ) {
        return {
          disabled:
            this.housing === '' || this.yearsLived === '' || this.waterBill === '' || this.singleFamily === '' || this.deed === '' || this.properties === ''
        }
      }else if (this.housing === 'Rent') {
        return {
          disabled:
            this.housing === '' || this.yearsLived === '' || this.waterBill === '' || this.lease === ''
        }
      }else{
        return {
          disabled:
            this.housing === '' || this.yearsLived === '' || this.waterBill === ''
        }
      }

    },
    housing: {
      get() {
        return this.$store.state.form.housing
      },
      set(value) {
        console.log(value)
        this.$store.commit('updateForm', { setting: 'housing', value: value })
      }
    },
    deed: {
      get() {
        return this.$store.state.form.deed
      },
      set(value) {
        console.log(value)
        this.$store.commit('updateForm', { setting: 'deed', value: value })
      }
    },
    lease: {
      get() {
        return this.$store.state.form.lease
      },
      set(value) {
        console.log(value)
        this.$store.commit('updateForm', { setting: 'lease', value: value })
      }
    },
    properties: {
      get() {
        return this.$store.state.form.properties
      },
      set(value) {
        console.log(value)
        this.$store.commit('updateForm', { setting: 'properties', value: value })
      }
    },
    singleFamily: {
      get() {
        return this.$store.state.form.singleFamily
      },
      set(value) {
        console.log(value)
        this.$store.commit('updateForm', { setting: 'singleFamily', value: value })
      }
    },
    yearsLived: {
      get() {
        return this.$store.state.form.yearsLived
      },
      set(value) {
        console.log(value)
        this.$store.commit('updateForm', { setting: 'yearsLived', value: value })
      }
    },
    waterBill: {
      get() {
        return this.$store.state.form.waterBill
      },
      set(value) {
        console.log(value)
        this.$store.commit('updateForm', { setting: 'waterBill', value: value })
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

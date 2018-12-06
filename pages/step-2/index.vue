<template>
  <section>
    <ProgressBar
      :step="2" />
    <h1>About you</h1>
    <p class="helper-text">
      Tell us a little about yourself.
    </p>
    <div class="question">
      <label
        for="age"><h2>How old are you?</h2></label>
      <input
        id="age"
        v-model.number="age"
        name="age"
        type="number"
        min="18"
        max="100">
    </div>
    <div class="question">
      <h2>What is your marital status?</h2>
      <input
        id="single"
        v-model="marital"
        type="radio"
        name="marital"
        value="Never married">
      <label
        for="single">I've never been married.</label><br>
      <input
        id="married"
        v-model="marital"
        type="radio"
        name="marital"
        value="Married">
      <label
        for="married">I’m married.</label><br>
      <input
        id="divorced"
        v-model="marital"
        type="radio"
        name="marital"
        value="Divorced">
      <label
        for="divorced">I’m divorced.</label><br>
      <input
        id="widowed"
        v-model="marital"
        type="radio"
        name="marital"
        value="Widowed">
      <label
        for="widowed">I’m widowed.</label>
    </div>
    <div
      v-if="marital === 'Married'"
      class="question">
      <h3>Is your spouse 65 or older?</h3>
      <input
        id="spouse-over-65"
        v-model="spouseAge"
        type="radio"
        name="spouseAge"
        value="Yes">
      <label
        for="spouse-over-65">Yes</label><br>
      <input
        id="spouse-under-65"
        v-model="spouseAge"
        type="radio"
        name="spouseAge"
        value="No">
      <label
        for="spouse-under-65">No</label>
    </div>

    <div
      v-if="marital === 'Widowed'"
      class="question">
      <h3>Was your spouse 65 or older when they passed away?</h3>
      <input
        id="widowed-over-65"
        v-model="widowedAge"
        type="radio"
        name="widowedAge"
        value="Yes">
      <label
        for="widowed-over-65">Yes</label><br>
      <input
        id="widowed-under-65"
        v-model="widowedAge"
        type="radio"
        name="widowed-age"
        value="No">
      <label
        for="widowed-under-65">No</label>
    </div>

    <nuxt-link
      :class="isDisabled"
      class="button"
      to="/step-3">Next <i class="far fa-arrow-right"></i></nuxt-link>
    <nuxt-link
      to="/step-1"
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
      //marital: []
      disabled: true
    }
  },
  computed: {
    isDisabled() {
      return {
        disabled: this.age === '' || this.marital === '' || this.disabled === ''
      }
    },
    age: {
      get() {
        return this.$store.state.form.age
      },
      set(value) {
        this.$store.commit('updateForm', { setting: 'age', value: value })
      }
    },
    marital: {
      get() {
        return this.$store.state.form.marital
      },
      set(value) {
        this.$store.commit('updateForm', { setting: 'marital', value: value })
      }
    },
    spouseAge: {
      get() {
        return this.$store.state.form.spouseAge
      },
      set(value) {
        this.$store.commit('updateForm', { setting: 'spouseAge', value: value })
      }
    },
    widowedAge: {
      get() {
        return this.$store.state.form.widowedAge
      },
      set(value) {
        this.$store.commit('updateForm', { setting: 'widowedAge', value: value })
      }
    }
  },
  methods: {},
}
</script>

<style>
#age {
  width: 5rem;
}
</style>

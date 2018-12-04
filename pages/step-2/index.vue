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
        value="single">
      <label
        for="single">I've never been married.</label><br>
      <input
        id="married"
        v-model="marital"
        type="radio"
        name="marital"
        value="married">
      <label
        for="married">I’m married.</label><br>
      <input
        id="divorced"
        v-model="marital"
        type="radio"
        name="marital"
        value="divorced">
      <label
        for="divorced">I’m divorced.</label><br>
      <input
        id="widowed"
        v-model="marital"
        type="radio"
        name="marital"
        value="widowed">
      <label
        for="widowed">I’m widowed.</label>
    </div>
    <div
      v-if="marital === 'married'"
      class="question">
      <h3>Is your spouse 65 or older?</h3>
      <input
        id="spouse-over-65"
        v-model="spouseAge"
        type="radio"
        name="spouseAge"
        value="spouse-over-65">
      <label
        for="spouse-over-65">Yes</label><br>
      <input
        id="spouse-under-65"
        v-model="spouseAge"
        type="radio"
        name="spouseAge"
        value="spouse-under-65">
      <label
        for="spouse-under-65">No</label>
    </div>

    <div
      v-if="marital === 'widowed'"
      class="question">
      <h3>Was your spouse 65 or older when they passed away?</h3>
      <input
        id="widowed-over-65"
        v-model="widowedAge"
        type="radio"
        name="widowedAge"
        value="widowed-over-65">
      <label
        for="widowed-over-65">Yes</label><br>
      <input
        id="widowed-under-65"
        v-model="widowedAge"
        type="radio"
        name="widowed-age"
        value="widowed-under-65">
      <label
        for="widowed-under-65">No</label>
    </div>

    <div class="question">
      <h2>Does anyone in your household have a physical disability?</h2>
      <input
        id="disabled"
        v-model="disability"
        type="radio"
        name="disability"
        value="disabled">
      <label
        for="disabled">Yes</label><br>
      <input
        id="not-disabled"
        v-model="disability"
        type="radio"
        name="disability"
        value="not-disabled">
      <label
        for="not-disabled">No</label>
    </div>
    <nuxt-link
      :class="isDisabled"
      class="button"
      to="/step-3">Next <i class="far fa-arrow-right"></i></nuxt-link>
    <nuxt-link
      to="/step-1"
      class="prev-button"><i class="far fa-arrow-left"></i> Previous question</nuxt-link>
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
        this.$store.commit('updateAge', value)
      }
    },
    marital: {
      get() {
        return this.$store.state.form.marital
      },
      set(value) {
        this.$store.commit('updateMarital', value)
      }
    },
    disability: {
      get() {
        return this.$store.state.form.disability
      },
      set(value) {
        this.$store.commit('updateDisability', value)
      }
    },
    spouseAge: {
      get() {
        return this.$store.state.form.spouseAge
      },
      set(value) {
        this.$store.commit('updateSpouseAge', value)
      }
    },
    widowedAge: {
      get() {
        return this.$store.state.form.widowedAge
      },
      set(value) {
        this.$store.commit('updateWidowedAge', value)
      }
    }
  },
  methods: {}
}
</script>

<style>
#age {
  width: 5rem;
}
</style>

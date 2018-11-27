<template>
  <!-- eslint-disable vue/html-self-closing -->
  <section>
    <h1>About you</h1>
    <p class="helper-text">
      To begin, tell us a little about yourself.
    </p>
    <form>
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
          v-model="maritalStatus"
          type="radio"
          name="marital-status"
          value="single">
        <label
          for="single">I've never been married.</label><br>
        <input
          id="married"
          v-model="maritalStatus"
          type="radio"
          name="marital-status"
          value="married">
        <label
          for="married">I’m married.</label><br>
        <input
          id="divorced"
          v-model="maritalStatus"
          type="radio"
          name="marital-status"
          value="divorced">
        <label
          for="divorced">I’m divorced.</label><br>
        <input
          id="widowed"
          v-model="maritalStatus"
          type="radio"
          name="marital-status"
          value="widowed">
        <label
          for="widowed">I’m widowed.</label>
      </div>

      <div
        v-if="maritalStatus === 'married'"
        class="question">
        <h3>Is your spouse 65 or older?</h3>
        <input
          id="spouse-over-65"
          type="radio"
          name="spouse-age"
          value="spouse-over-65">
        <label
          for="spouse-over-65">Yes</label><br>
        <input
          id="spouse-under-65"
          type="radio"
          name="spouse-age"
          value="spouse-under-65">
        <label
          for="spouse-under-65">No</label>
      </div>

      <div
        v-if="maritalStatus === 'widowed'"
        class="question">
        <h3>Was your spouse 65 or older when they passed away?</h3>
        <input
          id="widowed-over-65"
          type="radio"
          name="widowed-age"
          value="widowed-over-65">
        <label
          for="widowed-over-65">Yes</label><br>
        <input
          id="widowed-under-65"
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
          value="yes">
        <label
          for="disabled">Yes</label><br>
        <input
          id="not-disabled"
          v-model="disability"
          type="radio"
          name="disability"
          value="no">
        <label
          for="not-disabled">No</label>
      </div>

    </form>

    <nuxt-link
      :class="{ disabled: (age === '') || (maritalStatus === '') || (disability === '') }"
      class="button"
      to="/step-4">Next <i class="far fa-arrow-right"></i></nuxt-link>
    <nuxt-link
      to="/step-2"
      class="prev-button"><i class="far fa-arrow-left"></i> Previous question</nuxt-link>
  </section>
</template>

<script>
export default {
  data() {
    return {
      //maritalStatus: []
    }
  },
  computed: {
    age: {
      get() {
        return this.$store.state.form.age
      },
      set(value) {
        this.$store.commit('updateAge', value)
      }
    },
    maritalStatus: {
      get() {
        return this.$store.state.form.maritalStatus
      },
      set(value) {
        this.$store.commit('updateMaritalStatus', value)
      }
    },
    disability: {
      get() {
        return this.$store.state.form.disability
      },
      set(value) {
        this.$store.commit('updateDisability', value)
      }
    }
  },
  methods: {
    // updateAge(e) {
    //   this.$store.commit('updateAge', e.target.value)
    // },
    updateMaritalStatus(e) {
      this.$store.commit('updateMaritalStatus', e.target.value)
    }
  }
}
</script>

<style>
#age {
  width: 5rem;
}
</style>

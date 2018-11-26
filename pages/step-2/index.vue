<template>
  <!-- eslint-disable vue/html-self-closing -->
  <section>
    <h1>About your residence</h1>
    <form>
      <div class="question">
        <h2>Is your primary residence in the City of Philadelphia?</h2>
        <p class="helper-text">Your primary residence is the place where you usually live. If you receive your mail at a place or use its address for your taxes or IDs, it’s likely your primary residence.</p>
        <input
          id="philly"
          v-model="residence"
          type="radio"
          name="residence"
          value="philly">
        <label
          for="philly">Yes</label><br>
        <input
          id="elsewhere"
          v-model="residence"
          type="radio"
          name="residence"
          value="elsewhere">
        <label
          for="elsewhere">No</label>
      </div>

      <div v-if="residence == 'philly'">
        <label
          for="zip-code"><h2>What is the ZIP code of your primary residence?</h2></label>
        <input
          id="zip-code"
          v-model="zip"
          name="zip-code"
          type="number"
          min="19019"
          max="19255"><!--TODO: actually validate zip code -->
      </div>

      <div v-if="residence == 'elsewhere'">
        <p class="error">
          Because your primary residence is located outside of the City of Philadelphia, you don’t qualify for the programs included in One Form Philly.
        </p>
      </div>
    </form>


    <nuxt-link
      :class="{ disabled: zip == '' }"
      class="button"
      to="/step-3"
      @click="$store.commit(zip)">Next <i class="far fa-arrow-right"></i></nuxt-link>
    <nuxt-link
      to="/step-1"
      class="prev-button"><i class="far fa-arrow-left"></i> Previous question</nuxt-link>
  </section>
</template>

<script>
export default {
  data() {
    return {
      //zip: [],
      residence: ''
    }
  },
  computed: {
    zip: {
      get() {
        return this.$store.state.form.zip
      },
      set(value) {
        this.$store.commit('updateZip', value)
      }
    }
  }
}
</script>
<style>
#zip-code {
  width: 7rem;
}
</style>

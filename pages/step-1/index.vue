<template>
  <!-- eslint-disable vue/html-self-closing -->
  <section>
    <ProgressBar
      :step="1"
      :progress="10" />
    <h1>Before you begin</h1>
    <form>
      <h2>Are you filling out this form for yourself or someone else?</h2>
      <input
        id="myself"
        v-model="who"
        type="radio"
        name="who"
        value="myself"
        required="required">
      <label
        for="myself">I’m filling it out for my household.</label><br>
      <input
        id="someone"
        v-model="who"
        type="radio"
        name="who"
        value="someone"
        required="required">
      <label
        for="someone">I’m helping someone fill it out for their household.</label>
      <div
        v-if="who == 'someone'">
        <p class="callout mtm mhm">Since you’re helping someone, make sure to answer the questions from their point of view.</p>
        <h2>Where are you filling out this form?</h2>
        <select
          id="where">
          <option
            disabled
            value="">Please select one</option>
          <option>Home</option>
          <option>The Starship Enterprise</option>
          <option>Other</option>
        </select>
      </div>

    </form>

    <nuxt-link
      :class="{ disabled: who == '' }"
      class="button"
      to="/step-2"
      @click="submit()">Next <i class="far fa-arrow-right"></i></nuxt-link>
    <nuxt-link
      to="/"
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
      who: []
    }
  },
  methods: {
    submit() {
      this.data.push(this.who)
    }
  }
}
</script>
<style>
#where {
  width: 15rem;
}
</style>

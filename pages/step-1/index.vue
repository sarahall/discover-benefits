<template>
  <section>
    <h1>Page title</h1>
    <h2>Are you filling out this form for yourself or someone else?</h2>
    <div>
      <input
        id="myself"
        v-model="who"
        type="radio"
        name="who"
        value="myself">
      <label
        for="myself">I’m filling it out for my household.</label>
    </div>
    <div>
      <input
        id="someone"
        v-model="who"
        type="radio"
        name="who"
        value="someone">
      <label
        for="someone">I’m helping someone fill it out for their household.</label>
    </div>
    <div
      v-if="who == 'someone'"
      class="helper-text">
      Since you’re helping someone, make sure to answer the questions from their point of view.
    </div>

    <nuxt-link
      :class="{ disabled: who == '' }"
      class="button"
      to="/step-2">Next</nuxt-link>
    <nuxt-link
      to="/"
      class="prev-button">Previous question</nuxt-link>
  </section>
</template>
<script>
export default {
  data() {
    return {
      who: []
    }
  }
}
</script>

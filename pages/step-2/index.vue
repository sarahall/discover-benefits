<template>
  <section>
    <h1>About your residence</h1>
    <h2>Is your primary residence in the City of Philadelphia?</h2>
    <p class="helper-text">Your primary residence is the place where you usually live. If you receive your mail at a place or use its address for your taxes or IDs, it’s likely your primary residence.</p>
    <div>
      <input
        id="philly"
        v-model="residence"
        type="radio"
        name="residence"
        value="philly">
      <label
        for="philly">Yes</label>
    </div>
    <div>
      <input
        id="elsewhere"
        v-model="residence"
        type="radio"
        name="residence"
        value="elsewhere">
      <label
        for="elsewhere">No</label>
    </div>

    <h2>What is the ZIP code of your primary residence?</h2>
    <nuxt-link
      class="button"
      to="/step-3">Next</nuxt-link>
    <nuxt-link
      to="/step-1"
      class="prev-button">Previous question</nuxt-link>
  </section>
</template>

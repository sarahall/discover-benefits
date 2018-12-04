<template>
  <div class="question">
    <h2>{{ question }}</h2>
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
</template>
<script>
export default {
  computed: {
    count () {
      return this.$store.state.question1a
    }
  }
}
</script>

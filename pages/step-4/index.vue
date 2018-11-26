<template>
  <section>
    <h1>About your home</h1>
    <p class="helper-text">
      Now, let’s learn more about the place where you live.
    </p>

    <div class="question">
      <h2>Do you rent or own the place where you live?</h2>
      <input
        id="rent"
        type="radio"
        name="housing-status"
        value="rent">
      <label
        for="rent">I rent it.</label><br>
      <input
        id="own"
        type="radio"
        name="housing-status"
        value="own">
      <label
        for="own">I own it.</label><br>
      <input
        id="neither"
        type="radio"
        name="housing-status"
        value="neither">
      <label
        for="neither">I do not rent or own.</label>
    </div>
    <div class="question">
      <label
        for="years-lived"><h2>How many years have you lived in your primary residence?</h2></label>
      <input
        id="years-lived"
        name="years-lived"
        type="number"
        min="1"
        max="100">
    </div>

    <div class="question">
      <h2>Are you up to date on your water bill?</h2>
      <input
        id="water-bill-paid"
        type="radio"
        name="water-bill"
        value="paid">
      <label
        for="water-bill-paid">Yes</label><br>
      <input
        id="water-bill-unpaid"
        type="radio"
        name="water-bill"
        value="unpaid">
      <label
        for="water-bill-unpaid">No</label>
    </div>

    <nuxt-link
      class="button"
      to="/step-5">Next</nuxt-link>
    <nuxt-link
      to="/step-3"
      class="prev-button">Previous question</nuxt-link>
  </section>
</template>

<style>
#years-lived {
  width: 5rem;
}
</style>

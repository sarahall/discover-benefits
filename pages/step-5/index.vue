<template>
  <!-- eslint-disable vue/html-self-closing -->
  <section>
    <h1>About your household</h1>
    <p class="helper-text">
      Almost done! To finish, tell us a few details about your household.
    </p>
    <div class="question">
      <label for="household-size"><h2>How many people are in your household?</h2></label>
      <p class="helper-text">
        Include both adults and children in your count.
      </p>
      <select id="household-size">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8+</option>
      </select>
    </div>
    <div class="question">
      <label for="household-income"><h2>What is your household’s gross income?</h2></label>
      <p class="helper-text">
        Your gross income is the total amount of money you earn before taxes. You can provide an estimate.
      </p>
      <input
        id="household-income"
        name="household-income"
        type="number">
    </div>
    <div class="question">
      <h2>Question on frequency of income</h2>
    </div>

    <nuxt-link
      class="button"
      to="/review">Next <i class="far fa-arrow-right"></i></nuxt-link>
    <nuxt-link
      to="/step-4"
      class="prev-button"><i class="far fa-arrow-left"></i> Previous question</nuxt-link>
  </section>
</template>
<style>
#household-size {
  width: 4rem;
}
#household-income {
  width: 10rem;
}
</style>

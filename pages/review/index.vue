<template>
  <section>
    <h1>Confirm your answers</h1>
    <p class="helper-text">
      Before viewing your results, take a moment to check your answers and make sure that everything looks right.
    </p>
    <p>
      If you see a mistake, you can make changes by selecting the edit lik to the right of each question.
    </p>
    <div class="grid-x page-headings">
      <div class="cell medium-3 bg-ghost-gray pas step">
        Step 1
      </div>
      <div class="cell medium-21 bg-ghost-gray pas page-title">
        About your primary residence
      </div>
    </div>

    <Answer
      :answer="this.$store.state.form.residence"
      question="Is your primary residence in the City of Philadelphia?"
      edit-link="step-1" />


    <div class="question">
      <h3>Who are you filling it out for?</h3>
      You entered: {{ this.$store.state.form.who }} <br>

      <nuxt-link
        to="/step-1"
        @click="submit()">Edit</nuxt-link>
    </div>

    <div class="question">
      <h3>Where are you filling it out?</h3>
      You entered: {{ this.$store.state.form.where }} <br>

      <nuxt-link
        to="/step-1"
        @click="submit()">Edit</nuxt-link>
    </div>


    <div class="question">
      <h3>How old are you?</h3>
      You entered: {{ this.$store.state.form.age }} <br>

      <nuxt-link
        to="/step-3"
        @click="submit()">Edit</nuxt-link>
    </div>

    <div class="question">
      <h3>Marital status</h3>
      You entered: {{ this.$store.state.form.marital }} <br>

      <nuxt-link
        to="/step-3"
        @click="submit()">Edit</nuxt-link>
    </div>

    <div class="question">
      <h3>Physical disability</h3>
      You entered: {{ this.$store.state.form.disability }} <br>

      <nuxt-link
        to="/step-3"
        @click="submit()">Edit</nuxt-link>
    </div>



    <div class="question">
      <h3>Rent/own</h3>
      You entered: {{ this.$store.state.form.housing }} <br>

      <nuxt-link
        to="/step-3"
        @click="submit()">Edit</nuxt-link>
    </div>

    <div class="question">
      <h3>Years lived</h3>
      You entered: {{ this.$store.state.form.yearsLived }} <br>

      <nuxt-link
        to="/step-3"
        @click="submit()">Edit</nuxt-link>
    </div>


    <div class="question">
      <h3>Water bill</h3>
      You entered: {{ this.$store.state.form.waterBill }} <br>

      <nuxt-link
        to="/step-3"
        @click="submit()">Edit</nuxt-link>
    </div>

    <div class="question">
      <h3>Number in household</h3>
      You entered: {{ this.$store.state.form.numberInHousehold }} <br>

      <nuxt-link
        to="/step-3"
        @click="submit()">Edit</nuxt-link>
    </div>


    <div class="question">
      <h3>Income</h3>
      You entered: {{ this.$store.state.form.grossIncome }} <br>

      <nuxt-link
        to="/step-3"
        @click="submit()">Edit</nuxt-link>
    </div>

    <div class="question">
      <h3>Income frequency</h3>
      You entered: {{ this.$store.state.form.frequency }} <br>

      <nuxt-link
        to="/step-3"
        @click="submit()">Edit</nuxt-link>
    </div>

    <div>
      <nuxt-link
        to="/">Back to step 1</nuxt-link>
    </div>
  </section>
</template>
<script>
import Answer from '~/components/Answer.vue'

export default {
  components: {
    Answer
  }
}
</script>
<style>

.page-headings .step{
  border-right: 5px solid white;
  text-align: center;
  font-size: 1.1rem;
}
.page-headings .page-title{
  font-size: 1.5rem;
  font-weight: 600;
}
</style>

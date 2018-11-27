<template>
  <!-- eslint-disable vue/html-self-closing -->
  <section>
    <h1>Confirm your answers</h1>

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
      <h3>What is your zip?</h3>
      You entered: {{ this.$store.state.form.zip }} <br>

      <nuxt-link
        to="/step-2"
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

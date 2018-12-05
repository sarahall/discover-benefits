<template>
  <section>
    <ProgressBar
      :step="5" />
    <h1>Confirm your answers</h1>
    <p class="helper-text">
      Before viewing your results, take a moment to check your answers and make sure that everything looks right.
    </p>
    <p>
      If you see a mistake, you can make changes by selecting the edit lik to the right of each question.
    </p>
    <div class="grid-x page-headings mbm">
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

    <Answer
      :answer="this.$store.state.form.zip"
      question="What is the ZIP code of your primary residence?"
      edit-link="step-1" />

    <Answer
      :answer="this.$store.state.form.who"
      question="Are you filling out this form for yourself or someone else?"
      edit-link="step-1" />

    <Answer
      :answer="this.$store.state.form.where"
      question="Where are you filling out this form?"
      edit-link="step-1" />


    <div class="grid-x page-headings mbm">
      <div class="cell medium-3 bg-ghost-gray pas step">
        Step 2
      </div>
      <div class="cell medium-21 bg-ghost-gray pas page-title">
        About you
      </div>
    </div>

    <Answer
      :answer="this.$store.state.form.age"
      question="How old are you?"
      edit-link="step-2" />

    <Answer
      :answer="this.$store.state.form.marital"
      question="What is your marital status?"
      edit-link="step-2" />

    <Answer
      :answer="this.$store.state.form.widdowedAge"
      question="Was your spouse 65 or older when they passed away?"
      edit-link="step-2" />

    <Answer
      :answer="this.$store.state.form.spouseAge"
      question="Is your spouse 65 or older?"
      edit-link="step-2" />

    <div class="grid-x page-headings mbm">
      <div class="cell medium-3 bg-ghost-gray pas step">
        Step 3
      </div>
      <div class="cell medium-21 bg-ghost-gray pas page-title">
        About your home
      </div>
    </div>

    <Answer
      :answer="this.$store.state.form.housing"
      question="Do you rent or own the place where you live?"
      edit-link="step-3" />

    <Answer
      :answer="this.$store.state.form.singleFamily"
      question="Is it a single family home?"
      edit-link="step-3" />

    <Answer
      :answer="this.$store.state.form.deed"
      question="Is your name on the deed?"
      edit-link="step-3" />

    <Answer
      :answer="this.$store.state.form.properties"
      question="Do you own any other properties?"
      edit-link="step-3" />

    <Answer
      :answer="this.$store.state.form.lease"
      question="Is your name on the lease?"
      edit-link="step-3" />

    <Answer
      :answer="this.$store.state.form.yearsLived"
      question="How many years have you lived in your primary residence?"
      edit-link="step-3" />

    <Answer
      :answer="this.$store.state.form.waterBill"
      question="Are you up to date on your water bill?"
      edit-link="step-3" />


    <div class="grid-x page-headings mbm">
      <div class="cell medium-3 bg-ghost-gray pas step">
        Step 4
      </div>
      <div class="cell medium-21 bg-ghost-gray pas page-title">
        About your household
      </div>
    </div>

    <Answer
      :answer="this.$store.state.form.household"
      question="How many people are in your household?"
      edit-link="step-4" />

    <Answer
      :answer="this.$store.state.form.grossIncome"
      question="What is your gross income?"
      edit-link="step-4" />

    <Answer
      :answer="this.$store.state.form.frequency"
      question="How often do you receive the income you entered?"
      edit-link="step-4" />

    <div>
      <nuxt-link
        class="button"
        to="/">Submit</nuxt-link>
    </div>
  </section>
</template>
<script>
import Answer from '~/components/Answer.vue'
import ProgressBar from '~/components/ProgressBar.vue'

export default {
  components: {
    Answer,
    ProgressBar
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

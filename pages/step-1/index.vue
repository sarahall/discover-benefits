<template>
  <section>
    <ProgressBar
      :step="1"/>
    <h1>Before you begin</h1>
    <form>
      <div class="question">
        <h2>Is your primary residence in the City of Philadelphia?</h2>
        <p class="helper-text">Your primary residence is the place where you usually live. If you receive your mail at a place or use its address for your taxes or IDs, it’s likely your primary residence.</p>
        <input
          id="philly"
          v-model="residence"
          type="radio"
          name="residence"
          value="Yes"
          required="required">
        <label
          for="philly">Yes</label><br>
        <input
          id="elsewhere"
          v-model="residence"
          type="radio"
          name="residence"
          value="No"
          required="required">
        <label
          for="elsewhere">No</label>
      </div>

      <div
        v-if="residence == 'Yes'"
        class="question">
        <label
          for="zip-code"><h2>What is the ZIP code of your primary residence?</h2></label>
        <input
          id="zip-code"
          v-model.number="zip"
          name="zip-code"
          type="number"
          min="19019"
          max="19255"
          required="required"><!--TODO: actually validate zip code -->
      </div>

      <div v-if="residence == 'No'">
        <p class="error mtm">
          Because your primary residence is located outside of the City of Philadelphia, you don’t qualify for the programs included in One Form Philly.
        </p>
      </div>

      <div
        v-if="residence == 'Yes'"
        class="question">
        <h2>Are you filling out this form for yourself or someone else?</h2>

        <input
          id="myself"
          v-model="who"
          type="radio"
          name="who"
          value="Myself"
          required="required"
          @click="notDisabled">

        <label for="myself">I’m filling it out for my household.</label><br>

        <input
          id="someone"
          v-model="who"
          type="radio"
          name="who"
          value="Someone else"
          required="required">

        <label for="someone">I’m helping someone fill it out for their household.</label>

        <div v-if="who === 'Someone else'">
          <p class="callout mtl mhm">Since you’re helping someone, make sure to answer the questions from their point of view.</p>
          <div class="question">
            <label for="where"><h2>Where are you filling out this form?</h2></label>

            <p class="helper-text">You might answer “at home,” “at the library,” “at a KEYSPOT,” or wherever you might be. By understanding where people use One Form Philly, we can make it better.</p>
            <select
              id="where"
              v-model="where"
              @blur="checkField"
              @click="notDisabled">
              <option
                disabled
                value="">Please select one</option>
              <option>At home</option>
              <option>Other</option>
            </select>
            <label
              for="where-other"
              class="accessible">Other: </label>
            <input
              v-if="where === 'Other'"
              id="where-other"
              v-model="other"
              name="other"
              type="text">
          </div>
        </div>
        <div
          v-if="errors.length"
          class="error-message">
          All fields are required.
        </div>
      </div>
    </form>

    <nuxt-link
      :class="isDisabled"
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
      disabled: true,
      errors: []
    }
  },
  computed: {
    isDisabled() {
      return {
        disabled: this.disabled,
      }
    },
    residence: {
      get() {
        return this.$store.state.form.residence
      },
      set(value) {
        this.$store.commit('updateForm', { setting: 'residence', value: value })
      }
    },
    zip: {
      get() {
        return this.$store.state.form.zip
      },
      set(value) {
        console.log(value)
        this.$store.commit('updateForm', { setting: 'zip', value: value })
      }
    },
    who: {
      get() {
        return this.$store.state.form.who
      },
      set(value) {
        this.$store.commit('updateForm', { setting: 'who', value: value })
      }
    },
    where: {
      get() {
        return this.$store.state.form.where
      },
      set(value) {
        this.$store.commit('updateForm', { setting: 'where', value: value })
      }
    },
    other: {
      get() {
        return this.$store.state.form.other
      },
      set(value) {
        this.$store.commit('updateForm', { setting: 'other', value: value })
      }
    }
  },
  methods: {
    notDisabled() {
      this.disabled = false
    },
    submit() {
      this.$router.push('/step-2')
    },
    updateZip(e) {
      this.$store.commit('updateZip', e.target.value)
    },
    checkField(e) {
      if (this.where != '') {
        console.log(this.where)
        return true
      }
      this.errors = []

      if (!this.where) {

        this.errors.push('Location required.' + "kjsk")
      }
    }
  }
}
</script>
<style>
#where {
  width: 15rem;
}
#where-other {
  width: 20rem;
  display: inline-block;
  margin-left: 1rem;
}
#zip-code {
  width: 7rem;
}
</style>

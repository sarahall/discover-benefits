<template>
  <div>
    <h1 class="title">
      Introduction text
    </h1>
    <p>X% of Philadelphians qualify for [City assistance] -- and never use it.</p>

    <p>One Form Philly matches you with City programs that can help you save money and  improve your quality of life. Through these programs, you might:</p>
    <ul>
      <li>
        Lower your water bill.
      </li>
      <li>
        Pay your real estate taxes in installments.
      </li>
      <li>
        Get support as a first-time home buyer.
      </li>
      <li>
        Find other help with your housing needs, taxes, and utilities.
      </li>
    </ul>
    <p>First, we’ll ask some questions about you and your household. Then, we’ll show you the programs that we think you might qualify for. </p>
    <p>
      <input
        id="disclaimer"
        type="checkbox"
        name="interest[]"
        value="disclaimer"
        @click="isDisabled = !isDisabled">
      <label for="disclaimer">I understand that by using One Form Philly, I’m not applying for benefits and I must confirm that I qualify for any programs. I recognize that only select City programs are included in this tool.</label>
    </p>
    <nuxt-link
      :class="{ disabled: isDisabled }"
      class="button"
      to="/step-1">Get started</nuxt-link>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import PhilaButton from '~/components/PhilaButton.vue'

export default {
  components: {
    Logo,
    PhilaButton
  },
  data() {
    return {
      isDisabled: true
    }
  }
}
</script>

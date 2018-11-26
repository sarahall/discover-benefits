<template>
  <div id="application">
    <philaAppHeader
      app-title="OneFormPhilly"/>
    <philaAppSubHeader />
    <div class="grid-container">
      <div class="grid-x">
        <section class="cell">
          <nuxt/>
        </section>
      </div>
    </div>
    <philaAppFooter
      feedback-link="https://www.phila.gov/feedback/"/>
  </div>
</template>

<script>
import PhilaAppHeader from '~/components/PhilaAppHeader.vue'
import PhilaAppSubHeader from '~/components/PhilaAppSubHeader.vue'
import PhilaAppFooter from '~/components/PhilaAppFooter.vue'

export default {
  components: {
    PhilaAppHeader,
    PhilaAppSubHeader,
    PhilaAppFooter
  }
}
</script>

<style>
@import '../node_modules/phila-app-css/dist/css/phila-app.min.css';
</style>

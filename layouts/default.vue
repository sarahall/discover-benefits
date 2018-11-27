<template>
  <div id="application">
    <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.5.0/css/all.css"
      integrity="sha384-j8y0ITrvFafF4EkV1mPW0BKm6dp3c+J9Fky22Man50Ofxo2wNe5pT1oZejDH9/Dt"
      crossorigin="anonymous">

    <div class="fixed-head">
      <philaAppHeader
        app-title="OneFormPhilly"/>
      <philaAppSubHeader />
    </div>
    <main class="content">
      <div class="grid-container">
        <div class="grid-x">
          <section class="cell">
            <nuxt/>
          </section>
        </div>
      </div>
    </main>

    <philaAppFooter
      feedback-link="https://www.phila.gov/feedback/"/>
  </div>
</template>

<script>
import PhilaAppHeader from '~/components/PhilaAppHeader.vue'
import PhilaAppSubHeader from '~/components/PhilaAppSubHeader.vue'
import PhilaAppFooter from '~/components/PhilaAppFooter.vue'
import ProgressBar from '~/components/ProgressBar.vue'

export default {
  components: {
    PhilaAppHeader,
    PhilaAppSubHeader,
    PhilaAppFooter,
    ProgressBar
  }
}
</script>

<style>
@import '../node_modules/phila-app-css/dist/css/phila-app.min.css';
.fixed-head {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
main {
  height: calc(100vh - 110px - 36px);
  position: relative;
  overflow: scroll;
  top: 110px;
  width: 100%;
}
</style>

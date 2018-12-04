<template>
  <div id="application">
    <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.5.0/css/all.css"
      integrity="sha384-j8y0ITrvFafF4EkV1mPW0BKm6dp3c+J9Fky22Man50Ofxo2wNe5pT1oZejDH9/Dt"
      crossorigin="anonymous">

    <div class="fixed-head">
      <philaHeader
        app-title="Discover Benefits"/>
      <philaSubHeader />
    </div>
    <main class="content">
      <div class="grid-container pbl">
        <div class="grid-x">
          <section class="cell">
            <nuxt/>
          </section>
        </div>
      </div>
    </main>

    <philaFooter
      feedback-link="https://www.phila.gov/feedback/"/>
  </div>
</template>

<script>
import PhilaHeader from '~/components/PhilaHeader.vue'
import PhilaSubHeader from '~/components/PhilaSubHeader.vue'
import PhilaFooter from '~/components/PhilaFooter.vue'
import ProgressBar from '~/components/ProgressBar.vue'

export default {
  components: {
    PhilaHeader,
    PhilaSubHeader,
    PhilaFooter,
    ProgressBar
  }
}
</script>

<style>
@import '../node_modules/@cityofphiladelphia/phila-app-css/dist/css/phila-app.min.css';

.fixed-head {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
main {
  height: calc(100vh - 110px - 36px);
  margin-bottom: 4rem;
  position: relative;
  overflow: scroll;
  top: 110px;
  width: 100%;
}
</style>

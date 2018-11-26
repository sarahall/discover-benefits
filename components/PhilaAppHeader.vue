<template>
  <header
    class="site-header app group">
    <div
      class="row expanded">
      <div
        class="columns">
        <a
          href="//phila.gov"
          class="logo">
          <!--TODO: make local + svg -->
          <img
            src="https://standards.phila.gov/img/logo/city-of-philadelphia-yellow-white.png"
            alt="City of Philadelphia">
        </a>
        <div
          class="app-divide"/>
        <div
          class="page-title-container">
          <a
            href="/">
            <h1
              class="page-title">{{ appTitle }}</h1>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    appTitle: {
      type: String,
      required: true
    }
  }
}
</script>

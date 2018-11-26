<template>
  <div class="app-footer anchor">
    <footer>
      <div
        class="row expanded">
        <div
          class="columns">
          <nav>
            <ul
              class="inline-list">
              <li>
                <a
                  :href="feedbackLink">Feedback</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  </div>
</template>


<script>
export default {
  props: {
    feedbackLink: {
      type: String,
      required: true,
      default: 'https://www.phila.gov/feedback/'
    }
  }
}
</script>

<style scoped>
.app-footer.anchor {
  position: fixed;
  bottom: 0;
}
</style>

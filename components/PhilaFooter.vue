<template>
  <div class="app-footer anchor">
    <footer>
      <div class="row expanded">
        <div class="columns">
          <nav>
            <ul class="inline-list">
              <li>
                <a :href="feedbackLink">Feedback</a>
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
      default: 'https://docs.google.com/forms/d/e/1FAIpQLSco7CKGe5L8FVWalleTPo6isnp5fso_A-SdWLLhFeFYkGfqpQ/viewform'
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

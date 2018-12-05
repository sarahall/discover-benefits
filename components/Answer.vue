<template>
  <div
    v-if="answer !== ''"
    class="grid-x">
    <div class="cell medium-3 pas step"></div>
    <div class="cell medium-21 pas page-title">
      <div class="edit-link">
        <nuxt-link
          :to="editLink">Edit</nuxt-link>
      </div>
      <h3>{{ question }}</h3>
      <div>
        <span class="prxl">You entered:</span> {{ answer }}
      </div>

      <hr :class="isLast">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      question: {
        type: String,
        required: true,
        default: '?'
      },
      answer: {
        type: String,
        required: true,
        default: ''
      },
      editLink: {
        type: String,
        required: true,
        default: 'step-1'
      },
      isLast: {
        type: String,
        required: false,
        default: ''
      }
    }
  }
</script>
<style>
h3 {
  display: inline-block;
}
.edit-link {
  float:right;
}
hr.last {
  display: none;
}
</style>

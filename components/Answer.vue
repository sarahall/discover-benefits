<template>
  <div class="grid-x">
    <div class="cell medium-3 pas step"></div>
    <div class="cell medium-18 pas page-title">
      <h3>{{ question }}</h3>
      <span class="prxl">You entered:</span> {{ answer }} <br>
    </div>
    <div class="cell medium-1">
      <nuxt-link
        :to="editLink">Edit</nuxt-link>
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
        default: 'answer'
      },
      editLink: {
        type: String,
        required: true,
        default: 'step-1'
      }
    }
  }
</script>

<template>
  <a
    :href="link"
    class="button">{{ text }}</a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
      default: '#'
    },
    text: {
      type: String,
      required: true,
      default: 'button text'
    }
  }
}
</script>

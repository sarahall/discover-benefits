<template>
  <div class="progress-container">
    <div class="progress-section progress-bg">
      <div
        v-bind="percent"
        class="progress-container progress-color">
        <span class="progress-indicator">{{ (step / totalSteps) * 100 + '%' }}</span>
      </div>
    </div>
    <span class="small-bold">Step {{ step }} of {{ totalSteps }}</span>
  </div>
</template>
<script>
export default {
  props: {
    progress: {
      type: Number,
      required: false,
      default: 0
    },
    step: {
      type: Number,
      required: false,
      default: 1
    },
    totalSteps: {
      type: Number,
      required: false,
      default: 5
    }
  },
  computed: {
    percent() {
      return {
        style: {
          width: (this.step / this.totalSteps) * 100 + '%'
        }
      }
    }
  }
}
</script>
<style>
.progress-container {
  margin: 0.5rem 0;
  font-family: 'Montserrat';
}
.progress-bg {
  color: #000;
  background-color: #f1f1f1;
}

.progress-color {
  color: #fff;
  background-color: #58c04d;
  padding: 0.4rem;
  font-weight: bold;
}
.progress-container:after,
.progress-container:before,
.progress-bar:before,
.progress-bar:after {
  content: '';
  display: table;
  clear: both;
}
.progress-indicator {
  float: right;
}
.small-bold {
  font-size: 0.8rem;
  font-weight: bold;
}
</style>

<template>
  <div class="unit-icon">
    <span class="unit-counter">{{ counter }}</span>
    <img src="@/assets/icons/Unit/farmer.png" alt="farmer" />
    <div class="meter">
      <span style="width: 100%">
        <span :class="['progress', { paused: !isActive }]"></span>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  props: {
    counter: {
      type: Number,
      required: true
    },
    isActive: {
      type: Boolean,
      default: false
    },
    progressTime: {
      type: Number,
      default: 1000
    }
  },
  setup(props) {}
})
</script>

<style scoped>
.unit-counter {
  z-index: 2;
  position: absolute;
  left: -1px;
  top: -1px;
  font-size: 11px;
  line-height: 11px;
  background: white;
  border: 1px solid;
  padding: 2px;
}
.meter {
  height: 5px;
  position: relative;
  background: #f3efe6;
  overflow: hidden;
}

.meter span {
  display: block;
  height: 100%;
}

.progress {
  background-color: #e4c465;
  animation: progressBar ease-in-out;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-duration: 1s;
}
.progress.paused {
  animation-play-state: paused;
}

@keyframes progressBar {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>

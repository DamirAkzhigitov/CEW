<template>
  <div class="panel">
    <p class="panel-title">{{ this.Text.Stats.Stats }}</p>

    Свободных мест: {{ store.stats.living_space }}
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<style scoped></style>

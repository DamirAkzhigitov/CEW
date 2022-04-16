<template>
  <div class="panel">
    <p class="panel-title">{{ this.Text.Stats.Buildings }}</p>
    <div v-for="(building, key) in store.buildings">
      <p>{{ key }}: {{ building }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<style scoped></style>

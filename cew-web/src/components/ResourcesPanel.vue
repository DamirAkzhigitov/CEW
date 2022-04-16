<template>
  <div class="panel">
    <p class="panel-title">{{ this.Text.Stats.Resources }}</p>

    <div v-for="(resource, key) in store.resources">
      <p>{{ key }}: {{ resource }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<style scoped></style>

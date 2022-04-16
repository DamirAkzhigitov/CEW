<template>
  <div class="panel">
    <p class="panel-title">{{ this.Text.Stats.Units }}</p>

    <div>
      <div v-for="(unit, key) in store.units">
        <p>{{ key }}: {{ unit }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<style scoped></style>

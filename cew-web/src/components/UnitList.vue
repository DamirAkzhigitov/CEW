<template>
  <div>
    <div v-for="unit in units" :key="unit.id" class="c-ba c-ma-2">
      {{ unit.type }}: {{ unit.isAlive }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useCounterStore } from '../stores/counter'

export default defineComponent({
  name: 'UnitList',
  setup() {
    const store = useCounterStore()

    const units = ref(store.solders)

    return {
      units
    }
  }
})
</script>

<style scoped></style>

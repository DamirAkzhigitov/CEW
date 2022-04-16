<template>
  <div class="building-item">
    <div class="building-image c-br">img</div>
    <div class="building-body">
      <p class="building-name c-bb c-pa-1">{{ name }}</p>
      <div class="building-body__container">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

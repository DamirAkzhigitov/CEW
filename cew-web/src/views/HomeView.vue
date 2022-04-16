<template>
  <main>
    <resources-panel />
    <stats-panel />
    <unit-panel />
    <building />
    <center-building />
  </main>
</template>

<script lang="ts">
import ResourcesPanel from '@/components/ResourcesPanel.vue'
import StatsPanel from '@/components/StatsPanel.vue'
import UnitPanel from '@/components/UnitPanel.vue'
import Building from '@/components/Building.vue'
import CenterBuilding from '@/components/Buildings/CenterBuilding.vue'
import { useCounterStore } from '@/stores/counter'
import { onMounted } from 'vue'

export default {
  components: {
    CenterBuilding,
    Building,
    UnitPanel,
    StatsPanel,
    ResourcesPanel
  },
  setup() {}
}
</script>

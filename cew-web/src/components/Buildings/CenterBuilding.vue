<template>
  <div>
    <building-item :name="this.Text.Building.Center">
      <unit-item
        :counter="productionCount"
        :is-active="productionStart"
        @click="onClickCreateUnit"
      />
    </building-item>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  defineAsyncComponent,
  watch,
  computed
} from 'vue'
import { useCounterStore } from '@/stores/counter'

export default defineComponent({
  components: {
    'building-item': defineAsyncComponent(() => import('./BuildingItem.vue')),
    'unit-item': defineAsyncComponent(
      () => import('@/components/Buildings/UnitItem.vue')
    )
  },
  setup() {
    const state = useCounterStore()

    const unitType = 'civil'
    const productionInterval = ref(undefined)
    const productionCount = ref(0)
    const productionStart = ref(false)
    const cost = 100

    watch(
      () => productionCount.value,
      (newVal) => {
        if (newVal <= 0) {
          productionStart.value = false
          window.clearInterval(productionInterval.value)
        } else {
          productionStart.value = true
        }
      }
    )

    watch(
      () => productionStart.value,
      (isActiveProduction) => {
        if (!isActiveProduction) return

        productionInterval.value = window.setInterval(() => {
          productionCount.value = productionCount.value - 1
          state.incrementCivils()
        }, 1000)
      }
    )

    const isAvailableUnit = computed(() => {
      return state.resources.food > cost
    })

    const onClickCreateUnit = () => {
      if (!isAvailableUnit.value) {
        alert('Не хватает ресурсов')
        return
      }
      console.log('state.resources.food: ', state.resources.food)
      if (state.resources.food > cost) {
        state.buyUnit(unitType)
        productionCount.value++
      }
    }

    return {
      isAvailableUnit,
      productionStart,
      productionCount,
      onClickCreateUnit
    }
  }
})
</script>

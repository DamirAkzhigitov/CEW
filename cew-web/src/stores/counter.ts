import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

const unitCost: { [key: string]: [number, number] } = {
  civil: [20, 100]
}

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    resources: {
      gold: 1000,
      food: 1000
    },
    units: {
      civil: 0
    },
    liveCycle: {
      test: undefined
    },
    solders: [
      {
        id: uuidv4(),
        type: 'worker',
        life: 70,
        isAlive: false
      }
    ],
    workers: {
      busy: 0,
      free: 0
    },
    buildings: {
      center: 0
    },
    stats: {
      living_space: 100
    }
  }),
  getters: {
    getResources: (state) => state.resources
  },
  actions: {
    hungerArmy() {},
    decreaseResource(amount: [number, number]) {
      const [gold, food] = amount

      this.resources.gold = this.resources.gold - gold
      this.resources.food = this.resources.food - food
    },
    createUnit(type: string) {
      const id = uuidv4()

      // @ts-ignore
      this.liveCycle[id] = setInterval(() => {
        this.decreaseResource([0, 1])
      }, 7000)

      this.solders.push({
        id,
        type,
        life: 70,
        isAlive: true
      })
    },
    buyUnit(unitType: string) {
      const cost = unitCost[unitType]
      this.decreaseResource(cost)
    },
    incrementCivils() {
      this.createUnit('worker')
      this.units.civil++
    }
  }
})

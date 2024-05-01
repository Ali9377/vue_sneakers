// useSneakersStore.ts
import { defineStore } from 'pinia'

export const useSneakersStore = defineStore('sneakers', {
  state: () => ({
    sneakers: []
  }),
  actions: {
    async fetchSneakers() {
      try {
        const response = await fetch('https://39eb68d6dd2f318b.mokky.dev/items')
        const data = await response.json()
        this.sneakers = data 
      } catch (error) {
        console.error('Failed to fetch sneakers:', error)
      }
    }
  }
})

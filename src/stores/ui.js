// src/stores/ui.js
import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
  state: () => ({
    drawer: false, // mobile drawer open/close
    activeLink: '/', // active route
    darkMode: false, // theme toggle
  }),

  getters: {
    isDrawerOpen: (state) => state.drawer,
  },

  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },

    setActiveLink(route) {
      this.activeLink = route
    },

    toggleDarkMode() {
      this.darkMode = !this.darkMode
    },
  },
})

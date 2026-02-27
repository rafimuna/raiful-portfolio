// src/stores/auth.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    async login(username, password) {
      try {
        const res = await axios.post('/api/login/', { username, password })
        this.token = res.data.access // assuming JWT
        localStorage.setItem('token', this.token)
        await this.fetchUser()
      } catch (error) {
        console.error('Login Error:', error)
        throw error
      }
    },

    async fetchUser() {
      if (!this.token) return
      try {
        const res = await axios.get('/api/profile/', {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        this.user = res.data
      } catch (error) {
        console.error('Fetch User Error:', error)
        this.logout()
      }
    },

    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
    },
  },
})

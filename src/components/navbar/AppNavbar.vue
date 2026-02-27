<!-- src/components/navbar/AppNavbar.vue -->
<template>
  <q-header elevated class="bg-dark text-white">
    <q-toolbar>
      <!-- Mobile Menu Button -->
      <q-btn
        flat
        dense
        round
        icon="menu"
        class="q-mr-sm lt-md"
        @click="toggleDrawer"
        aria-label="Menu"
      />

      <!-- Logo -->
      <q-toolbar-title class="text-weight-bold cursor-pointer" @click="goToHome">
        Raiful.dev
      </q-toolbar-title>

      <!-- Desktop Links -->
      <div class="gt-sm">
        <NavLinks />
      </div>

      <!-- Optional: Dark Mode Toggle -->
      <!--
      <q-toggle
        v-model="darkMode"
        dense
        label="Dark"
        class="q-ml-md"
      />
      -->
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUIStore } from 'src/stores/ui'
import NavLinks from './NavLinks.vue'

const router = useRouter()
const ui = useUIStore()

// Toggle drawer for mobile
const toggleDrawer = () => {
  ui.toggleDrawer()
}

// Navigate to home when logo is clicked
const goToHome = () => {
  router.push('/')
  ui.setActiveLink('/')
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.q-toolbar {
  min-height: 64px;
}
</style>

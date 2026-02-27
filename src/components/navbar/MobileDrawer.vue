<!-- src/components/navbar/MobileDrawer.vue -->
<template>
  <q-drawer
    :model-value="ui.drawer"
    side="left"
    bordered
    @update:model-value="(val) => (ui.drawer = val)"
    :class="{ 'bg-dark text-white': ui.darkMode, 'bg-white text-dark': !ui.darkMode }"
  >
    <q-list padding>
      <!-- Navigation Links -->
      <q-item
        v-for="link in links"
        :key="link.to"
        clickable
        :to="link.to"
        @click="handleClick(link.to)"
        :active="ui.activeLink === link.to"
        active-class="text-primary"
      >
        <q-item-section>{{ link.label }}</q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup>
import { useUIStore } from 'src/stores/ui'

const ui = useUIStore()

// Links for the navbar / drawer
const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

// Click handler for drawer items
const handleClick = (to) => {
  ui.setActiveLink(to) // update active link in UI store
  ui.toggleDrawer() // close drawer after click
}
</script>

<style scoped>
/* Optional: smooth hover effect */
.q-item:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>

<!-- src/components/navbar/NavLinks.vue -->
<template>
  <q-btn
    v-for="link in links"
    :key="link.to"
    flat
    :label="link.label"
    :to="link.to"
    class="q-mx-sm"
    active-class="text-primary"
  />
</template>

<script setup>
const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]
</script>

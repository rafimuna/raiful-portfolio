<!-- src/layouts/MainLayout.vue -->
<template>
  <q-layout view="lHh Lpr lFf">
    <AppNavbar />
    <MobileDrawer />

    <q-page-container>
      <router-view />
    </q-page-container>
    <AppFooter />
  </q-layout>
</template>

<script setup>
import AppNavbar from '../components/navbar/AppNavbar.vue'
import MobileDrawer from '../components/navbar/MobileDrawer.vue'
import AppFooter from '../components/Footer/AppFooter.vue'
</script>

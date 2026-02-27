<template>
  <q-page class="q-pa-lg bg-grey-1">
    <AboutIntro />
    <div class="q-mt-xl">
      <SkillsList />
    </div>
  </q-page>
</template>

<script setup>
import AboutIntro from 'src/components/about/AboutIntro.vue'
import SkillsList from 'src/components/about/SkillsList.vue'
</script>

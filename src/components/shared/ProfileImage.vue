<template>
  <div class="profile-image-wrapper">
    <q-img :src="src" class="profile-image" ratio="1" />
    <div class="profile-decoration"></div>
  </div>
</template>

<script setup>
defineProps({
  src: { type: String, required: true },
})
</script>

<style scoped>
.profile-image-wrapper {
  position: relative;
  width: 250px;
  height: 250px;
}

.profile-image {
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid white;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  z-index: 2;
  transition: transform 0.3s ease;
}

.profile-image-wrapper:hover .profile-image {
  transform: scale(1.05);
}

.profile-decoration {
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  background: linear-gradient(135deg, var(--q-primary), var(--q-secondary));
  border-radius: 50%;
  opacity: 0.1;
  z-index: 1;
}
</style>

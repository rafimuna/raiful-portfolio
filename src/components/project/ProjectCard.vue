<!-- src/components/project/ProjectCard.vue -->
<template>
  <q-card flat bordered class="project-card" @click="$emit('view')">
    <!-- Featured Badge -->
    <q-badge
      v-if="project.featured"
      color="yellow"
      text-color="dark"
      class="featured-badge"
      icon="star"
      label="Featured"
    />

    <!-- Status Badge -->
    <q-badge :color="statusColor" class="status-badge" :label="project.status" />

    <!-- Project Image -->
    <div class="project-image-wrapper">
      <q-img :src="project.image" :ratio="16 / 9" class="project-image">
        <div class="absolute-full overlay-gradient"></div>
        <!-- Category Overlay -->
        <div class="category-overlay">
          <q-icon :name="categoryIcon" size="sm" :color="categoryColor" class="q-mr-xs" />
          <span class="text-caption text-white">{{ categoryLabel }}</span>
        </div>
      </q-img>
    </div>

    <!-- Project Content -->
    <q-card-section class="project-content">
      <!-- Title -->
      <h3 class="text-h5 text-weight-bold q-mb-sm project-title">{{ project.title }}</h3>

      <!-- Description -->
      <p class="text-body2 text-grey-7 line-clamp-2 q-mb-md">{{ project.description }}</p>

      <!-- Technologies -->
      <div class="technologies-wrapper q-mb-lg">
        <div class="row q-gutter-xs">
          <q-chip
            v-for="(tech, index) in displayedTechnologies"
            :key="index"
            dense
            :color="tech.color"
            text-color="white"
            size="sm"
            class="tech-chip"
          >
            {{ tech.name }}
          </q-chip>
          <q-chip
            v-if="project.technologies.length > 3"
            dense
            color="grey-4"
            text-color="dark"
            size="sm"
            class="more-chip"
          >
            +{{ project.technologies.length - 3 }}
          </q-chip>
        </div>
      </div>

      <!-- Footer -->
      <div class="project-footer">
        <div class="row justify-between items-center">
          <div class="project-date">
            <q-icon name="event" size="xs" class="q-mr-xs" />
            <span class="text-caption text-grey-6">{{ formatDate(project.date) }}</span>
          </div>
          <div class="project-actions">
            <q-btn
              v-if="project.demoUrl"
              round
              dense
              flat
              color="primary"
              icon="open_in_new"
              size="sm"
              @click.stop="openDemo"
              class="action-btn"
            />
            <q-btn
              v-if="project.githubUrl"
              round
              dense
              flat
              color="dark"
              icon="code"
              size="sm"
              @click.stop="openGithub"
              class="action-btn"
            />
            <q-btn
              round
              dense
              flat
              color="grey-6"
              icon="visibility"
              size="sm"
              @click.stop="$emit('view')"
              class="action-btn"
            />
          </div>
        </div>
      </div>
    </q-card-section>

    <!-- Hover Overlay -->
    <div class="hover-overlay"></div>
  </q-card>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

defineEmits(['view'])

// Computed properties
const statusColor = computed(() => {
  const colors = {
    completed: 'positive',
    'in-progress': 'warning',
    planned: 'info',
  }
  return colors[props.project.status] || 'grey'
})

const categoryIcon = computed(() => {
  const icons = {
    web: 'computer',
    mobile: 'smartphone',
    design: 'palette',
  }
  return icons[props.project.category] || 'folder'
})

const categoryColor = computed(() => {
  const colors = {
    web: 'primary',
    mobile: 'secondary',
    design: 'accent',
  }
  return colors[props.project.category] || 'grey'
})

const categoryLabel = computed(() => {
  const labels = {
    web: 'Web App',
    mobile: 'Mobile App',
    design: 'Design',
  }
  return labels[props.project.category] || 'Project'
})

const displayedTechnologies = computed(() => {
  return props.project.technologies.slice(0, 3)
})

// Methods
const formatDate = (dateString) => {
  const [year, month] = dateString.split('-')
  const date = new Date(year, month - 1)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

const openDemo = (e) => {
  e.stopPropagation()
  window.open(props.project.demoUrl, '_blank', 'noopener')
}

const openGithub = (e) => {
  e.stopPropagation()
  window.open(props.project.githubUrl, '_blank', 'noopener')
}
</script>

<style scoped>
.project-card {
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  height: 100%;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.project-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-color: var(--q-primary);
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 15px 15px 0 0;
}

.project-image {
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.overlay-gradient {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent 50%);
  opacity: 0.8;
}

.category-overlay {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(0, 0, 0, 0.7);
  padding: 4px 12px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.featured-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 10;
  border-radius: 8px;
  font-weight: 600;
  padding: 4px 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.status-badge {
  position: absolute;
  top: 50px;
  right: 12px;
  z-index: 10;
  border-radius: 8px;
  font-weight: 500;
  text-transform: capitalize;
  padding: 4px 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.25rem;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.project-card:hover .project-title {
  color: var(--q-primary);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.6;
}

.technologies-wrapper {
  min-height: 32px;
}

.tech-chip {
  transition: all 0.3s ease;
  border-radius: 8px;
  font-weight: 500;
}

.tech-chip:hover {
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.more-chip {
  border-radius: 8px;
}

.project-footer {
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.project-date {
  display: flex;
  align-items: center;
}

.project-actions {
  display: flex;
  gap: 4px;
}

.action-btn {
  transition: all 0.3s ease;
}

.action-btn:hover {
  transform: scale(1.2);
  background: rgba(var(--q-primary-rgb), 0.1);
}

.hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(var(--q-primary-rgb), 0.05), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.project-card:hover .hover-overlay {
  opacity: 1;
}

@media (max-width: 768px) {
  .project-card {
    margin-bottom: 1rem;
  }

  .project-content {
    padding: 1rem;
  }

  .project-title {
    font-size: 1.1rem;
  }
}
</style>

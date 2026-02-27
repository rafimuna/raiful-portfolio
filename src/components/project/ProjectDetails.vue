<template>
  <q-card class="project-details-card">
    <!-- Header -->
    <q-card-section class="bg-primary text-white">
      <div class="row justify-between items-center">
        <h2 class="text-h5 q-ma-none">{{ project.title }}</h2>
        <q-btn round flat icon="close" color="white" @click="$emit('close')" />
      </div>
    </q-card-section>

    <!-- Main Content -->
    <q-card-section class="q-pa-xl">
      <!-- Project Info -->
      <div class="row q-mb-xl">
        <div class="col-12 col-md-8">
          <p class="text-h6 text-grey-7 q-mb-md">{{ project.description }}</p>

          <!-- Features -->
          <div v-if="project.details?.features" class="q-mb-lg">
            <h4 class="text-h6 text-weight-bold q-mb-sm">Key Features</h4>
            <q-list dense>
              <q-item v-for="(feature, index) in project.details.features" :key="index">
                <q-item-section avatar>
                  <q-icon name="check_circle" color="positive" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ feature }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <!-- Technologies -->
          <div class="q-mb-lg">
            <h4 class="text-h6 text-weight-bold q-mb-sm">Technologies Used</h4>
            <div class="row q-gutter-sm">
              <q-chip
                v-for="tech in project.technologies"
                :key="tech.name"
                :color="tech.color"
                text-color="white"
                size="md"
                class="q-pa-md"
              >
                {{ tech.name }}
              </q-chip>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="col-12 col-md-4">
          <q-card flat bordered class="info-card q-pa-md">
            <!-- Status -->
            <div class="row items-center q-mb-md">
              <q-icon name="info" color="primary" class="q-mr-sm" />
              <span class="text-weight-medium">Status:</span>
              <q-badge :color="statusColor" class="q-ml-sm" :label="project.status" />
            </div>

            <!-- Category -->
            <div class="row items-center q-mb-md">
              <q-icon name="category" color="primary" class="q-mr-sm" />
              <span class="text-weight-medium">Category:</span>
              <span class="q-ml-sm">{{ categoryLabel }}</span>
            </div>

            <!-- Date -->
            <div class="row items-center q-mb-md">
              <q-icon name="event" color="primary" class="q-mr-sm" />
              <span class="text-weight-medium">Date:</span>
              <span class="q-ml-sm">{{ formatDate(project.date) }}</span>
            </div>

            <!-- Links -->
            <div class="q-mt-lg">
              <q-btn
                v-if="project.demoUrl"
                unelevated
                color="primary"
                icon="open_in_new"
                label="Live Demo"
                class="full-width q-mb-sm"
                @click="openDemo"
              />
              <q-btn
                v-if="project.githubUrl"
                outline
                color="dark"
                icon="code"
                label="View Code"
                class="full-width"
                @click="openGithub"
              />
            </div>
          </q-card>
        </div>
      </div>

      <!-- Screenshots -->
      <div v-if="project.details?.screenshots" class="q-mb-xl">
        <h4 class="text-h6 text-weight-bold q-mb-md">Screenshots</h4>
        <div class="row q-col-gutter-md">
          <div
            v-for="(screenshot, index) in project.details.screenshots"
            :key="index"
            class="col-12 col-md-6"
          >
            <q-img :src="screenshot" :ratio="16 / 9" class="screenshot-image rounded-borders" />
          </div>
        </div>
      </div>

      <!-- Challenges -->
      <div v-if="project.details?.challenges" class="q-mb-xl">
        <h4 class="text-h6 text-weight-bold q-mb-sm">Challenges & Solutions</h4>
        <q-list>
          <q-item v-for="(challenge, index) in project.details.challenges" :key="index">
            <q-item-section avatar>
              <q-icon name="warning" color="warning" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ challenge }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-card-section>

    <!-- Footer Actions -->
    <q-card-actions align="right" class="q-pa-md">
      <q-btn flat label="Close" color="grey" @click="$emit('close')" />
      <q-btn
        unelevated
        label="Contact About Project"
        color="primary"
        icon="mail"
        @click="contactAboutProject"
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { computed } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['close'])

// Computed properties
const statusColor = computed(() => {
  const colors = {
    completed: 'positive',
    'in-progress': 'warning',
    planned: 'info',
  }
  return colors[props.project.status] || 'grey'
})

const categoryLabel = computed(() => {
  const labels = {
    web: 'Web Application',
    mobile: 'Mobile Application',
  }
  return labels[props.project.category] || 'Project'
})

// Methods
const formatDate = (dateString) => {
  const [year, month] = dateString.split('-')
  const date = new Date(year, month - 1)
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

const openDemo = () => {
  window.open(props.project.demoUrl, '_blank', 'noopener')
}

const openGithub = () => {
  window.open(props.project.githubUrl, '_blank', 'noopener')
}

const contactAboutProject = () => {
  $q.notify({
    message: 'Contact form would open here',
    color: 'info',
    icon: 'mail',
  })
  emit('close')
}
</script>

<style scoped>
.project-details-card {
  border-radius: 20px;
  overflow: hidden;
}

.info-card {
  border-radius: 12px;
  background: #f8f9fa;
}

.screenshot-image {
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.screenshot-image:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* Custom scrollbar */
.project-details-card ::v-deep(.q-card__section) {
  max-height: 70vh;
  overflow-y: auto;
}

.project-details-card ::v-deep(.q-card__section)::-webkit-scrollbar {
  width: 8px;
}

.project-details-card ::v-deep(.q-card__section)::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.project-details-card ::v-deep(.q-card__section)::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.project-details-card ::v-deep(.q-card__section)::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>

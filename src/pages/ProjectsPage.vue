<template>
  <q-page padding class="bg-grey-1">
    <div class="row items-center justify-between q-mb-xl">
      <div>
        <h1 class="text-h3 text-weight-bold gradient-text">My Projects</h1>
        <p class="text-h6 text-grey-7 q-mt-sm">Showcasing my work in web development and design</p>
      </div>
      <div class="row q-gutter-md">
        <q-btn
          outline
          color="primary"
          label="Filter"
          icon="filter_list"
          @click="filterDialog = true"
        />
        <q-btn
          unelevated
          color="primary"
          label="View GitHub"
          icon="code"
          href="https://github.com"
          target="_blank"
        />
      </div>
    </div>

    <div class="row q-gutter-sm q-mb-lg">
      <q-chip
        v-for="category in projectCategories"
        :key="category.id"
        :color="selectedCategory === category.id ? 'primary' : 'grey-3'"
        :text-color="selectedCategory === category.id ? 'white' : 'dark'"
        :icon="category.icon"
        clickable
        @click="selectedCategory = category.id"
      >
        {{ category.name }}
        <q-badge
          v-if="category.count"
          color="white"
          :text-color="selectedCategory === category.id ? 'primary' : 'grey-7'"
          class="q-ml-xs"
        >
          {{ category.count }}
        </q-badge>
      </q-chip>
    </div>

    <div class="row q-col-gutter-xl">
      <div v-for="project in filteredProjects" :key="project.id" class="col-12 col-md-6 col-lg-4">
        <ProjectCard :project="project" @view="viewProjectDetails(project)" />
      </div>
    </div>

    <div v-if="filteredProjects.length === 0" class="text-center q-pa-xl">
      <q-icon name="inbox" size="xl" color="grey-4" class="q-mb-md" />
      <h4 class="text-h5 text-grey-7 q-mb-sm">No projects found</h4>
      <p class="text-grey-6">Try selecting a different filter or category.</p>
      <q-btn
        unelevated
        color="primary"
        label="Reset Filters"
        @click="selectedCategory = 'all'"
        class="q-mt-md"
      />
    </div>

    <div class="row q-mt-xl q-pt-xl" style="border-top: 1px solid rgba(0, 0, 0, 0.1)">
      <div class="col-12 col-md-4 text-center q-pa-md">
        <div class="text-h2 text-weight-bold text-primary">{{ totalProjects }}</div>
        <div class="text-h6 text-grey-7">Projects Completed</div>
      </div>
      <div class="col-12 col-md-4 text-center q-pa-md">
        <div class="text-h2 text-weight-bold text-secondary">{{ totalTechnologies }}</div>
        <div class="text-h6 text-grey-7">Technologies Used</div>
      </div>
      <div class="col-12 col-md-4 text-center q-pa-md">
        <div class="text-h2 text-weight-bold text-accent">{{ linesOfCode }}</div>
        <div class="text-h6 text-grey-7">Lines of Code</div>
      </div>
    </div>

    <q-dialog v-model="projectDialog" full-width :max-width="800">
      <ProjectDetails
        v-if="selectedProject"
        :project="selectedProject"
        @close="projectDialog = false"
      />
    </q-dialog>

    <q-dialog v-model="filterDialog" position="right">
      <ProjectFilters
        :categories="projectCategories"
        v-model:selected-category="selectedCategory"
        @close="filterDialog = false"
      />
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import ProjectCard from '../components/project/ProjectCard.vue'
import ProjectDetails from '../components/project/ProjectDetails.vue'
import ProjectFilters from '../components/project/ProjectFilters.vue'
import gsap from 'gsap'

// State
const selectedCategory = ref('all')
const projectDialog = ref(false)
const filterDialog = ref(false)
const selectedProject = ref(null)

// Sample projects data
const projects = ref([
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description:
      'A comprehensive admin dashboard for e-commerce businesses with real-time analytics.',
    category: 'web',
    tags: ['Vue 3', 'Quasar', 'Chart.js', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    status: 'completed',
    featured: true,
    demoUrl: 'https://demo.com',
    githubUrl: 'https://github.com',
    date: '2023-10',
    technologies: [
      { name: 'Vue.js 3', color: 'green' },
      { name: 'Quasar', color: 'blue' },
      { name: 'Pinia', color: 'orange' },
      { name: 'Firebase', color: 'yellow' },
    ],
    details: {
      overview:
        'A modern e-commerce dashboard with real-time analytics, inventory management, and customer insights.',
      features: [
        'Real-time sales analytics',
        'Inventory management system',
        'Customer behavior tracking',
        'Multi-vendor support',
        'Mobile responsive design',
      ],
      challenges: [
        'Implementing real-time data updates',
        'Optimizing for large datasets',
        'Ensuring mobile responsiveness',
      ],
      screenshots: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w-800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w-800&h=500&fit=crop',
      ],
    },
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'Collaborative task management application with team features and real-time updates.',
    category: 'mobile',
    tags: ['Quasar', 'Cordova', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
    status: 'completed',
    featured: true,
    demoUrl: 'https://taskapp.demo',
    githubUrl: 'https://github.com/taskapp',
    date: '2023-08',
    technologies: [
      { name: 'Quasar', color: 'blue' },
      { name: 'Node.js', color: 'green' },
      { name: 'MongoDB', color: 'green' },
      { name: 'Socket.io', color: 'orange' },
    ],
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Modern portfolio website with animations and responsive design.',
    category: 'web',
    tags: ['Vue.js', 'GSAP', 'SCSS', 'Netlify'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    status: 'completed',
    featured: false,
    demoUrl: 'https://portfolio.demo',
    githubUrl: 'https://github.com/portfolio',
    date: '2023-06',
    technologies: [
      { name: 'Vue.js', color: 'green' },
      { name: 'GSAP', color: 'purple' },
      { name: 'SCSS', color: 'pink' },
    ],
  },
])

// Project categories with counts
const projectCategories = computed(() => [
  { id: 'all', name: 'All Projects', icon: 'apps', count: projects.value.length },
  {
    id: 'web',
    name: 'Web Apps',
    icon: 'computer',
    count: projects.value.filter((p) => p.category === 'web').length,
  },
  {
    id: 'mobile',
    name: 'Mobile Apps',
    icon: 'smartphone',
    count: projects.value.filter((p) => p.category === 'mobile').length,
  },
  {
    id: 'featured',
    name: 'Featured',
    icon: 'star',
    count: projects.value.filter((p) => p.featured).length,
  },
  {
    id: 'completed',
    name: 'Completed',
    icon: 'check_circle',
    count: projects.value.filter((p) => p.status === 'completed').length,
  },
  {
    id: 'in-progress',
    name: 'In Progress',
    icon: 'hourglass_empty',
    count: projects.value.filter((p) => p.status === 'in-progress').length,
  },
])

// Filter projects based on selected category
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') return projects.value
  if (selectedCategory.value === 'featured') return projects.value.filter((p) => p.featured)
  if (selectedCategory.value === 'completed')
    return projects.value.filter((p) => p.status === 'completed')
  if (selectedCategory.value === 'in-progress')
    return projects.value.filter((p) => p.status === 'in-progress')
  return projects.value.filter((p) => p.category === selectedCategory.value)
})

// Stats
const totalProjects = computed(() => projects.value.length)
const totalTechnologies = computed(() => {
  const allTechs = projects.value.flatMap((p) => p.technologies || [])
  const uniqueTechs = [...new Set(allTechs.map((t) => t.name))]
  return uniqueTechs.length
})
const linesOfCode = computed(() => {
  return projects.value.length * 5000
})

// Methods
const viewProjectDetails = (project) => {
  selectedProject.value = project
  projectDialog.value = true
}

// Animations
onMounted(() => {
  gsap.from('.gradient-text', {
    y: -20,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  })

  gsap.from('.row.q-col-gutter-xl > div', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    delay: 0.3,
    ease: 'power3.out',
  })
})
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, var(--q-primary) 0%, var(--q-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-h2 {
  transition: all 0.5s ease;
}

.text-h2:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .row.items-center.justify-between {
    flex-direction: column;
    align-items: flex-start;
  }

  .row.q-gutter-md {
    margin-top: 1rem;
    width: 100%;
  }

  .row.q-gutter-md .q-btn {
    flex: 1;
  }
}
</style>

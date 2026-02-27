<!-- src/pages/HomePage.vue -->
<template>
  <q-page class="bg-grey-1">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Enhanced Projects Section -->
    <section id="projects" class="projects-section q-py-xl q-px-lg">
      <!-- Section Header -->
      <div class="section-header text-center q-mb-xl">
        <div class="section-badge q-mb-md">
          <q-badge rounded color="primary" class="q-px-lg q-py-xs">
            <q-icon name="work" class="q-mr-xs" /> Featured Work
          </q-badge>
        </div>
        <h2 class="text-h2 text-weight-bold gradient-text q-mb-sm">My Portfolio</h2>
        <p class="text-h6 text-grey-7 max-width-600 q-mx-auto">
          Showcasing my latest projects and creative solutions
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-item">
          <ProjectCard :project="project" />
        </div>
      </div>

      <!-- View All Projects Button -->
      <div class="text-center q-mt-xl q-pt-lg" style="border-top: 1px solid rgba(0, 0, 0, 0.1)">
        <q-btn
          unelevated
          color="primary"
          label="View All Projects"
          icon="arrow_forward"
          to="/projects"
          class="q-px-xl"
        />
        <p class="text-caption text-grey-6 q-mt-sm">
          Explore more than {{ totalProjectsCount }} projects in my portfolio
        </p>
      </div>

      <!-- Stats Bar -->
      <div class="stats-bar q-mt-xl q-pt-xl" style="border-top: 1px solid rgba(0, 0, 0, 0.1)">
        <div class="row justify-center q-col-gutter-xl">
          <div class="col-auto text-center">
            <div class="text-h2 text-weight-bold text-primary">{{ stats.completed }}</div>
            <div class="text-caption text-grey-6">Projects Completed</div>
          </div>
          <div class="col-auto text-center">
            <div class="text-h2 text-weight-bold text-secondary">{{ stats.technologies }}</div>
            <div class="text-caption text-grey-6">Technologies Used</div>
          </div>
          <div class="col-auto text-center">
            <div class="text-h2 text-weight-bold text-accent">{{ stats.clients }}+</div>
            <div class="text-caption text-grey-6">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

import HeroSection from 'src/components/hero/HeroSection.vue'
import ProjectCard from 'src/components/project/ProjectCard.vue'
import gsap from 'gsap'

// Enhanced projects data
const projects = ref([
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description:
      'A comprehensive admin dashboard for e-commerce businesses with real-time analytics and inventory management.',
    category: 'web',
    tags: ['Vue 3', 'Quasar', 'Chart.js', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
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
      overview: 'Modern e-commerce dashboard with real-time analytics and inventory management.',
      features: [
        'Real-time sales analytics',
        'Inventory management',
        'Customer insights',
        'Multi-vendor support',
      ],
    },
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'Collaborative task management application with team features, real-time updates, and file sharing.',
    category: 'mobile',
    tags: ['Quasar', 'Cordova', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
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
    description:
      'Modern portfolio website with advanced animations, responsive design, and performance optimization.',
    category: 'web',
    tags: ['Vue.js', 'GSAP', 'SCSS', 'Netlify'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
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

// Stats data
const stats = ref({
  completed: 15,
  technologies: 12,
  clients: 10,
})

// Computed properties
const totalProjectsCount = computed(() => projects.value.length)

// Animations
onMounted(() => {
  // Animate section header
  gsap.from('.section-header', {
    y: -30,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.projects-section',
      start: 'top 80%',
    },
  })

  // Animate project cards
  gsap.from('.project-item', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.projects-grid',
      start: 'top 70%',
    },
  })

  // Animate stats
  gsap.from('.stats-bar .text-h2', {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.stats-bar',
      start: 'top 70%',
    },
  })
})
</script>

<style scoped>
.projects-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

.projects-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--q-primary), transparent);
}

.section-header {
  position: relative;
  padding-bottom: 2rem;
}

.section-badge {
  display: inline-block;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.gradient-text {
  background: linear-gradient(135deg, var(--q-primary) 0%, var(--q-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.max-width-600 {
  max-width: 600px;
}

/* Projects Grid Layout */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 0 auto;
  max-width: 1200px;
}

.project-item {
  position: relative;
  transition: all 0.3s ease;
}

.project-item:hover {
  transform: translateY(-10px);
}

/* Stats Bar */
.stats-bar {
  background: linear-gradient(
    135deg,
    rgba(var(--q-primary-rgb), 0.05) 0%,
    rgba(var(--q-secondary-rgb), 0.05) 100%
  );
  border-radius: 20px;
  padding: 2rem;
  margin-top: 4rem;
}

.stats-bar .text-h2 {
  transition: all 0.3s ease;
  cursor: pointer;
}

.stats-bar .text-h2:hover {
  transform: scale(1.1);
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media (max-width: 992px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .text-h2 {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .projects-section {
    padding: 3rem 1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .text-h2 {
    font-size: 2rem;
  }

  .stats-bar .row {
    flex-direction: column;
    gap: 2rem;
  }
}

@media (max-width: 480px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .text-h2 {
    font-size: 1.8rem;
  }
}
</style>

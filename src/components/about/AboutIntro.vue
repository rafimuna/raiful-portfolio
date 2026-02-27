<template>
  <q-page padding class="bg-grey-1">
    <!-- Hero/Intro Section -->
    <div class="row items-stretch q-mb-xl">
      <!-- Left Card -->
      <div class="col-12 col-md-8 q-pr-md-lg">
        <q-card flat bordered class="my-card q-pa-xl hero-card full-height">
          <h1 class="text-h3 text-weight-bold q-mb-md gradient-text">Raiful Islam</h1>

          <p class="text-h6 text-grey-7 q-mb-lg">
            Crafting exceptional digital experiences with modern web technologies
          </p>

          <p class="text-body1 q-mb-lg line-height-2">
            Hi! I'm a passionate fullstack developer specializing in building modern, responsive,
            and professional web applications using Vue.js, Quasar, and Django. I focus on creating
            intuitive user interfaces with clean code and optimal performance.
          </p>

          <!-- Stats -->
          <div class="row q-gutter-lg q-mb-xl">
            <div class="col-auto">
              <div class="text-h4 text-weight-bold text-primary">2+</div>
              <div class="text-caption text-grey-6">Years Experience</div>
            </div>
            <div class="col-auto">
              <div class="text-h4 text-weight-bold text-primary">15+</div>
              <div class="text-caption text-grey-6">Projects Completed</div>
            </div>
            <div class="col-auto">
              <div class="text-h4 text-weight-bold text-primary">10+</div>
              <div class="text-caption text-grey-6">Happy Clients</div>
            </div>
          </div>

          <!-- Social/Contact Links -->
          <div class="row q-gutter-md q-mt-auto">
            <q-btn
              unelevated
              color="primary"
              icon="email"
              label="Contact Me"
              class="q-px-xl"
              @click="$emit('contact')"
            />
            <q-btn outline color="primary" icon="download" label="Download CV" class="q-px-xl" />
          </div>
        </q-card>
      </div>

      <!-- Profile Image Right -->
      <div class="col-12 col-md-4 flex justify-center q-mt-lg q-mt-md-none">
        <div class="profile-container">
          <div class="profile-frame">
            <div class="profile-image-wrapper">
              <q-img src="public/images/rafi1.jpg" alt="Raiful Islam" class="profile-image" />
            </div>

            <!-- Floating badges around image -->
            <div class="floating-badge badge-1">
              <q-icon name="code" color="primary" size="sm" />
            </div>
            <div class="floating-badge badge-2">
              <q-icon name="design_services" color="secondary" size="sm" />
            </div>
            <div class="floating-badge badge-3">
              <q-icon name="devices" color="accent" size="sm" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced Technical Skills Section -->
    <q-card flat bordered class="my-card q-pa-xl q-mb-xl">
      <!-- Section Header -->
      <div class="row items-center justify-between q-mb-xl">
        <div class="col-auto">
          <div class="row items-center">
            <div class="col-auto">
              <div class="icon-wrapper bg-primary q-pa-sm rounded-borders">
                <q-icon name="terminal" color="white" size="md" />
              </div>
            </div>
            <div class="col q-ml-md">
              <h2 class="text-h4 text-weight-bold q-ma-none">Technical Expertise</h2>
              <p class="text-grey-6 q-mt-xs">Technologies I work with daily</p>
            </div>
          </div>
        </div>
        <div class="col-auto">
          <q-toggle v-model="showDetails" color="primary" label="Show Details" dense />
        </div>
      </div>

      <!-- Skill Categories with Progress Bars -->
      <div class="row q-col-gutter-xl">
        <!-- Frontend Technologies -->
        <div class="col-12 col-md-6">
          <div class="category-card q-pa-lg">
            <div class="row items-center q-mb-lg">
              <div class="col-auto">
                <div class="category-icon bg-primary">
                  <q-icon name="computer" color="white" size="sm" />
                </div>
              </div>
              <div class="col q-ml-md">
                <h3 class="text-h5 text-weight-bold q-ma-none">Frontend Development</h3>
                <p class="text-grey-6 q-mt-xs q-mb-none">Modern frameworks & libraries</p>
              </div>
            </div>

            <div class="skill-list">
              <div v-for="skill in frontendSkills" :key="skill.name" class="skill-item">
                <div class="row justify-between items-center q-mb-xs">
                  <div class="col-auto">
                    <span class="text-weight-medium">{{ skill.name }}</span>
                  </div>
                  <div class="col-auto">
                    <span class="text-caption text-grey-6">{{ skill.level }}%</span>
                  </div>
                </div>
                <q-linear-progress
                  :value="skill.level / 100"
                  color="primary"
                  class="q-mb-md"
                  size="8px"
                  rounded
                />
                <div v-if="showDetails" class="skill-details">
                  <p class="text-caption text-grey-7 q-mb-none">{{ skill.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend & Tools -->
        <div class="col-12 col-md-6">
          <div class="category-card q-pa-lg">
            <div class="row items-center q-mb-lg">
              <div class="col-auto">
                <div class="category-icon bg-secondary">
                  <q-icon name="storage" color="white" size="sm" />
                </div>
              </div>
              <div class="col q-ml-md">
                <h3 class="text-h5 text-weight-bold q-ma-none">Backend & Tools</h3>
                <p class="text-grey-6 q-mt-xs q-mb-none">Server-side & development tools</p>
              </div>
            </div>

            <div class="skill-list">
              <div v-for="skill in backendSkills" :key="skill.name" class="skill-item">
                <div class="row justify-between items-center q-mb-xs">
                  <div class="col-auto">
                    <span class="text-weight-medium">{{ skill.name }}</span>
                  </div>
                  <div class="col-auto">
                    <span class="text-caption text-grey-6">{{ skill.level }}%</span>
                  </div>
                </div>
                <q-linear-progress
                  :value="skill.level / 100"
                  :color="skill.category === 'backend' ? 'secondary' : 'accent'"
                  class="q-mb-md"
                  size="8px"
                  rounded
                />
                <div v-if="showDetails" class="skill-details">
                  <p class="text-caption text-grey-7 q-mb-none">{{ skill.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Technologies -->
      <div class="additional-tech q-mt-xl">
        <h4 class="text-h6 text-weight-medium q-mb-lg">Additional Technologies</h4>
        <div class="row q-gutter-sm">
          <q-chip
            v-for="tech in additionalTech"
            :key="tech"
            outline
            color="grey-6"
            size="md"
            class="tech-chip q-pa-sm"
            icon="check_circle"
            icon-color="positive"
          >
            {{ tech }}
          </q-chip>
        </div>
      </div>
    </q-card>

    <!-- Experience Section -->
    <q-card flat bordered class="my-card q-pa-xl q-mb-xl">
      <div class="row items-center q-mb-lg">
        <div class="col-auto">
          <div class="icon-wrapper bg-primary q-pa-sm rounded-borders">
            <q-icon name="work" color="white" size="md" />
          </div>
        </div>
        <div class="col">
          <h2 class="text-h4 text-weight-bold q-ma-none">Professional Experience</h2>
          <p class="text-grey-6 q-mt-xs">My career journey</p>
        </div>
      </div>

      <!-- Timeline-style experience -->
      <div class="experience-timeline">
        <div
          v-for="(exp, index) in experience"
          :key="index"
          class="experience-item row items-start q-mb-xl"
        >
          <div class="col-12 col-md-3 q-mb-md q-mb-md-none">
            <div class="timeline-marker-wrapper">
              <div :class="`timeline-marker ${index === 0 ? 'active' : ''}`">
                <div class="inner-dot"></div>
              </div>
              <q-badge :color="index === 0 ? 'primary' : 'grey-5'" class="year-badge">
                {{ exp.year }}
              </q-badge>
            </div>
          </div>
          <div class="col-12 col-md-9">
            <q-card flat bordered class="experience-card q-pa-lg hover-lift">
              <div class="row items-center q-mb-sm">
                <div class="col">
                  <h3 class="text-h5 text-weight-bold q-ma-none">{{ exp.role }}</h3>
                </div>
                <q-chip
                  v-if="index === 0"
                  outline
                  color="positive"
                  size="sm"
                  icon="trending_up"
                  label="Current"
                />
              </div>
              <div class="row items-center q-mb-md">
                <q-icon name="business" color="primary" size="sm" class="q-mr-xs" />
                <p class="text-h6 text-primary q-ma-none">{{ exp.company }}</p>
              </div>
              <p class="text-body1 text-grey-7 q-mb-none">
                {{ exp.description }}
              </p>
              <!-- Tech stack used -->
              <div class="row q-mt-md q-gutter-xs">
                <q-chip
                  v-for="tech in exp.technologies"
                  :key="tech"
                  dense
                  outline
                  color="grey-6"
                  size="sm"
                  class="tech-chip"
                >
                  {{ tech }}
                </q-chip>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </q-card>

    <!-- Contact CTA -->
    <q-card flat bordered class="my-card q-pa-xl text-center cta-card">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>

      <h2 class="text-h3 text-weight-bold q-mb-md">Let's Build Something Amazing</h2>
      <p class="text-h6 text-grey-7 q-mb-xl max-width-600">
        Interested in collaborating or have a project in mind? I'd love to hear about it.
      </p>
      <q-btn
        unelevated
        color="primary"
        size="lg"
        icon="mail"
        label="Get in Touch"
        class="q-px-xl q-py-sm btn-elevated"
        @click="$emit('contact')"
      />
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const showDetails = ref(false)

// Enhanced skills data with levels and descriptions
const frontendSkills = ref([
  {
    name: 'Vue.js ',
    level: 95,
    description: 'Advanced proficiency with Composition API, Vue Router, and reactive patterns',
    icon: 'vuejs',
  },
  {
    name: 'Quasar Framework',
    level: 90,
    description: 'Building responsive SPA, PWA, and mobile apps with Material Design',
    icon: 'web',
  },
  {
    name: 'JavaScript (ES6+)',
    level: 92,
    description: 'Modern JavaScript features, async/await, modules, and functional programming',
    icon: 'javascript',
  },
  {
    name: 'HTML5 / CSS3',
    level: 88,
    description: 'Semantic HTML, CSS Grid, Flexbox, animations, and responsive design',
    icon: 'html',
  },
  {
    name: 'Pinia ',
    level: 85,
    description: 'State management with modern approaches and TypeScript support',
    icon: 'storage',
  },
])

const backendSkills = ref([
  {
    name: 'Django / DRF',
    level: 80,
    description: 'Building RESTful APIs, authentication, and database models',
    category: 'backend',
  },
  {
    name: 'Python',
    level: 75,
    description: 'Backend development, scripting, and automation tasks',
    category: 'backend',
  },
  {
    name: 'Git / GitHub',
    level: 90,
    description: 'Version control, branching strategies, and collaborative workflows',
    category: 'tools',
  },
  {
    name: 'Axios',
    level: 70,
    description: 'UI/UX design, prototyping, and design system implementation',
    category: 'tools',
  },
  {
    name: 'GraphQL',
    level: 85,
    description: 'Build tools configuration, optimization, and development environment setup',
    category: 'tools',
  },
])

const additionalTech = ref([
  'SCSS/Sass',
  'Bootstrap',
  'Tailwind CSS',
  'REST APIs',
  'GraphQL',

  'Docker',
  'PostgreSQL',
])

// Enhanced experience with descriptions
const experience = ref([
  {
    role: 'Frontend Developer',
    company: 'ABC Ltd.',
    year: '2022-Present',
    description:
      'Led frontend development for multiple client projects using Vue.js and Quasar framework. Implemented responsive designs and optimized application performance.',
    technologies: ['Vue 3', 'Quasar', 'Pinia', 'TypeScript', 'SCSS'],
  },
  {
    role: 'Web Development Intern',
    company: 'XYZ Corp.',
    year: '2021-2022',
    description:
      'Assisted in developing and maintaining web applications. Learned industry best practices and contributed to live projects.',
    technologies: ['Vue.js', 'Django', 'Bootstrap', 'jQuery'],
  },
])

// GSAP animations
onMounted(() => {
  // Hero section animation
  gsap.from('.hero-card', {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  })

  gsap.from('.profile-frame', {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: 'back.out(1.7)',
  })

  // Animate floating badges
  gsap.from('.floating-badge', {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    delay: 0.8,
    ease: 'elastic.out(1, 0.5)',
  })

  // Floating animation for badges
  gsap.to('.floating-badge', {
    y: -10,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    stagger: 0.2,
  })

  // Animate skill bars on scroll
  gsap.utils.toArray('.skill-item').forEach((item, i) => {
    gsap.from(item, {
      x: -20,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
      },
    })
  })
})
</script>

<style scoped>
/* Fix for height alignment */
.full-height {
  height: 100%;
  min-height: 500px;
}

/* Main card styling */
.my-card {
  background: white;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.my-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.hero-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Enhanced Profile Image Design */
.profile-container {
  width: 100%;
  height: 100%;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.profile-frame {
  position: relative;
  width: 320px;
  height: 320px;
  border-radius: 25px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.25),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}

.profile-image-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border: 8px solid white;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.profile-image:hover {
  transform: scale(1.05);
}

/* Floating badges around image */
.floating-badge {
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border: 3px solid white;
  z-index: 10;
}

.badge-1 {
  top: 30px;
  right: -20px;
  background: linear-gradient(135deg, var(--q-primary), #4c6ef5);
}

.badge-2 {
  bottom: 50px;
  left: -20px;
  background: linear-gradient(135deg, var(--q-secondary), #20c997);
}

.badge-3 {
  top: 120px;
  left: -10px;
  background: linear-gradient(135deg, var(--q-accent), #ff6b6b);
}

/* Gradient text for name */
.gradient-text {
  background: linear-gradient(135deg, var(--q-primary) 0%, var(--q-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ENHANCED TECHNICAL SKILLS SECTION */
.category-card {
  background: #f8f9fa;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 100%;
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  background: white;
}

.category-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-list {
  margin-top: 1.5rem;
}

.skill-item {
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.skill-item:last-child {
  border-bottom: none;
}

.skill-item:hover {
  transform: translateX(5px);
  background: rgba(255, 255, 255, 0.5);
  padding-left: 0.75rem;
  border-radius: 8px;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
}

.skill-details {
  padding: 0.5rem 0;
  animation: fadeIn 0.3s ease;
}

/* Enhanced Progress Bars */
.q-linear-progress {
  border-radius: 4px;
}

.q-linear-progress__model {
  border-radius: 4px;
}

/* Additional Technologies */
.additional-tech {
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.tech-chip {
  transition: all 0.2s ease;
  border-radius: 8px;
}

.tech-chip:hover {
  transform: translateY(-2px);
  background: rgba(var(--q-primary-rgb), 0.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Icon styling */
.icon-wrapper {
  border-radius: 12px;
}

/* Experience timeline styling */
.experience-timeline {
  position: relative;
}

.experience-item {
  position: relative;
}

.timeline-marker-wrapper {
  position: relative;
  padding-top: 10px;
}

.timeline-marker {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 4px solid var(--q-grey-4);
  position: absolute;
  left: -12px;
  top: 20px;
  z-index: 2;
}

.timeline-marker.active {
  border-color: var(--q-primary);
}

.timeline-marker.active .inner-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--q-primary);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.year-badge {
  padding: 8px 20px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  margin-left: 20px;
}

.experience-card {
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.experience-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, var(--q-primary), var(--q-secondary));
}

.hover-lift:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

/* CTA section */
.cta-card {
  background: linear-gradient(
    135deg,
    rgba(var(--q-primary-rgb), 0.05) 0%,
    rgba(var(--q-secondary-rgb), 0.05) 100%
  );
  border: none;
  position: relative;
  overflow: hidden;
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(var(--q-primary-rgb), 0.05);
}

.shape-1 {
  width: 100px;
  height: 100px;
  top: -50px;
  right: -50px;
}

.shape-2 {
  width: 150px;
  height: 150px;
  bottom: -75px;
  left: -75px;
}

.shape-3 {
  width: 80px;
  height: 80px;
  top: 50%;
  right: 10%;
}

.btn-elevated {
  box-shadow: 0 10px 20px rgba(var(--q-primary-rgb), 0.2);
  transition: all 0.3s ease;
}

.btn-elevated:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(var(--q-primary-rgb), 0.3);
}

.max-width-600 {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Typography improvements */
.line-height-2 {
  line-height: 1.8;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .full-height {
    min-height: 450px;
  }

  .profile-frame {
    width: 280px;
    height: 280px;
  }
}

@media (max-width: 768px) {
  .full-height {
    min-height: auto;
  }

  .profile-container {
    min-height: 350px;
    margin-top: 2rem;
  }

  .profile-frame {
    width: 250px;
    height: 250px;
  }

  .floating-badge {
    width: 40px;
    height: 40px;
  }

  .badge-1 {
    right: -10px;
  }

  .badge-2 {
    left: -10px;
  }

  /* Stack skills columns on mobile */
  .row.q-col-gutter-xl > div {
    margin-bottom: 2rem;
  }

  .category-card {
    margin-bottom: 1rem;
  }
}

@media (max-width: 600px) {
  .profile-frame {
    width: 220px;
    height: 220px;
  }

  h1.text-h3 {
    font-size: 2rem;
  }

  h2.text-h4 {
    font-size: 1.5rem;
  }

  .experience-item {
    flex-direction: column;
  }

  .timeline-marker {
    position: relative;
    left: 0;
    margin-bottom: 10px;
  }

  .year-badge {
    margin-left: 0;
    margin-top: 10px;
  }

  .tech-chip {
    font-size: 0.75rem;
    padding: 4px 8px;
  }
}
</style>

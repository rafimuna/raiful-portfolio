<template>
  <section class="hero-section">
    <div class="row items-center q-mb-xl">
      <div class="col-12 col-md-8 q-pr-md-lg">
        <q-card flat bordered class="my-card q-pa-xl hero-card full-height">
          <!-- Animated Name -->
          <div class="text-header">
            <h1
              ref="titleRef"
              class="text-h3 text-weight-bold q-mb-md animated-gradient-text typing-text"
            >
              Raiful Islam
            </h1>

            <!-- Title with animated underline -->
            <div class="title-wrapper q-mb-lg">
              <div class="text-h6 text-grey-7 animated-subtitle">
                <span class="highlight-words">
                  <span class="highlight-word">Crafting</span>
                  <span class="highlight-word">exceptional</span>
                  <span class="highlight-word">digital</span>
                  <span class="highlight-word">experiences</span>
                  <span class="highlight-word">with</span>
                  <span class="highlight-word">modern</span>
                  <span class="highlight-word">web</span>
                  <span class="highlight-word">technologies</span>
                </span>
              </div>
              <div class="animated-underline"></div>
            </div>
          </div>

          <!-- Description with fade-in effect -->
          <p class="text-body1 q-mb-lg line-height-2 fade-in-text">
            Hi! I'm a passionate fullstack developer specializing in building modern, responsive,
            and professional web applications using Vue.js, Quasar, and Django.
          </p>

          <!-- Animated Stats -->
          <div class="stats-container row q-gutter-lg q-mb-xl">
            <div class="col-auto stat-item">
              <div class="text-h4 text-weight-bold text-primary animated-number" data-count="2">
                0+
              </div>
              <div class="text-caption text-grey-6">Years Experience</div>
            </div>
            <div class="col-auto stat-item">
              <div class="text-h4 text-weight-bold text-primary animated-number" data-count="15">
                0+
              </div>
              <div class="text-caption text-grey-6">Projects Completed</div>
            </div>
            <div class="col-auto stat-item">
              <div class="text-h4 text-weight-bold text-primary animated-number" data-count="10">
                0+
              </div>
              <div class="text-caption text-grey-6">Happy Clients</div>
            </div>
          </div>

          <!-- Animated Buttons -->
          <div class="row q-gutter-md q-mt-auto">
            <q-btn
              unelevated
              color="primary"
              icon="email"
              label="Contact Me"
              class="q-px-xl btn-pulse"
              @click="scrollToContact"
            />
            <q-btn
              outline
              color="primary"
              icon="download"
              label="Download CV"
              class="q-px-xl btn-slide"
            />
          </div>
        </q-card>
      </div>

      <div class="col-12 col-md-4 flex justify-center q-mt-lg q-mt-md-none">
        <div class="profile-container">
          <div class="profile-frame">
            <div class="profile-image-wrapper">
              <q-img src="/images/rafi1.jpg" alt="Raiful Islam" class="profile-image" />
            </div>

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
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const titleRef = ref(null)

onMounted(() => {
  // Animate the main card
  gsap.from('.hero-card', {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  })

  // Animate profile frame
  gsap.from('.profile-frame', {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: 'back.out(1.7)',
  })

  // Animate title with typing effect
  gsap.from('.typing-text', {
    width: 0,
    duration: 2,
    ease: 'power2.inOut',
    delay: 0.5,
    onComplete: () => {
      // After typing animation, add glow effect
      gsap.to('.typing-text', {
        textShadow: '0 0 20px rgba(var(--q-primary-rgb), 0.5)',
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    },
  })

  // Animate each word in subtitle
  const words = document.querySelectorAll('.highlight-word')
  gsap.from(words, {
    y: 20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    delay: 1,
    ease: 'back.out(1.7)',
  })

  // Animate underline
  gsap.from('.animated-underline', {
    width: 0,
    duration: 1.5,
    delay: 1.5,
    ease: 'power3.out',
  })

  // Animate description text
  gsap.from('.fade-in-text', {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 1.8,
    ease: 'power2.out',
  })

  // Animate stats with counting effect
  const statNumbers = document.querySelectorAll('.animated-number')
  statNumbers.forEach((stat, index) => {
    gsap.from(stat, {
      innerHTML: 0,
      duration: 2,
      delay: 2 + index * 0.3,
      ease: 'power2.out',
      snap: { innerHTML: 1 },
      onUpdate: function () {
        stat.innerHTML = Math.floor(this.targets()[0].innerHTML) + '+'
      },
    })
  })

  // Button animations
  gsap.from('.btn-pulse', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    delay: 2.8,
    ease: 'back.out(1.7)',
  })

  gsap.from('.btn-slide', {
    x: -50,
    opacity: 0,
    duration: 0.8,
    delay: 3,
    ease: 'power3.out',
  })

  // Floating badges animation
  gsap.to('.floating-badge', {
    y: -15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    stagger: 0.2,
  })
})
</script>

<style scoped>
/* Enhanced Text Effects */

/* Animated Gradient Text */
.animated-gradient-text {
  background: linear-gradient(
    90deg,
    var(--q-primary) 0%,
    var(--q-secondary) 25%,
    var(--q-accent) 50%,
    var(--q-secondary) 75%,
    var(--q-primary) 100%
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 8s ease infinite;
  position: relative;
  overflow: hidden;
}

@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Typing Effect */
.typing-text {
  border-right: 3px solid var(--q-primary);
  white-space: nowrap;
  overflow: hidden;
  animation: typing-cursor 0.8s step-end infinite;
}

@keyframes typing-cursor {
  0%,
  100% {
    border-color: transparent;
  }
  50% {
    border-color: var(--q-primary);
  }
}

/* Word by word highlight animation */
.highlight-words {
  display: inline-block;
}

.highlight-word {
  display: inline-block;
  position: relative;
  margin-right: 0.3em;
}

.highlight-word:hover {
  color: var(--q-primary);
  transform: translateY(-2px);
  text-shadow: 0 2px 10px rgba(var(--q-primary-rgb), 0.3);
  transition: all 0.3s ease;
}

/* Animated Underline */
.title-wrapper {
  position: relative;
  display: inline-block;
}

.animated-underline {
  position: absolute;
  bottom: -5px;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--q-primary), var(--q-secondary));
  border-radius: 2px;
  box-shadow: 0 2px 10px rgba(var(--q-primary-rgb), 0.3);
}

/* Fade in text effect */
.fade-in-text {
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
  animation-delay: 1.8s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stats Animation */
.stats-container {
  opacity: 0;
  animation: fadeIn 1s ease forwards;
  animation-delay: 2s;
}

.stat-item {
  position: relative;
  padding: 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.stat-item:hover {
  background: rgba(var(--q-primary-rgb), 0.05);
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.stat-item:hover .animated-number {
  transform: scale(1.1);
  text-shadow: 0 5px 15px rgba(var(--q-primary-rgb), 0.3);
}

.animated-number {
  transition: all 0.3s ease;
  display: inline-block;
}

/* Button Animations */
.btn-pulse {
  animation: pulse 2s infinite;
  position: relative;
  overflow: hidden;
}

.btn-pulse:hover {
  animation: none;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(var(--q-primary-rgb), 0.3);
}

.btn-pulse::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: 0.5s;
}

.btn-pulse:hover::before {
  left: 100%;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(var(--q-primary-rgb), 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(var(--q-primary-rgb), 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(var(--q-primary-rgb), 0);
  }
}

.btn-slide {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn-slide:hover {
  transform: translateX(10px);
  border-width: 2px;
}

/* Floating Badges */
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

/* Responsive Design */
@media (max-width: 768px) {
  .animated-gradient-text {
    font-size: 2rem;
  }

  .typing-text {
    border-right: 2px solid var(--q-primary);
  }

  .stats-container {
    justify-content: center;
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
}

/* Existing styles remain the same... */
.hero-section {
  padding: 2rem 0;
}

.full-height {
  height: 100%;
  min-height: 500px;
}

.my-card {
  background: white;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.hero-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.my-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

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

.line-height-2 {
  line-height: 1.8;
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
}

@media (max-width: 600px) {
  .profile-frame {
    width: 220px;
    height: 220px;
  }
}
</style>

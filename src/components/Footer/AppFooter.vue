<template>
  <q-footer elevated class="app-footer">
    <div class="footer-container">
      <!-- Main Footer Content -->
      <div class="main-footer q-px-lg q-py-xl">
        <div class="row q-col-gutter-xl items-start">
          <!-- Brand Section -->
          <div class="col-12 col-md-4">
            <div class="brand-section">
              <div class="row items-center q-mb-sm">
                <div class="col-auto">
                  <div class="brand-logo">
                    <q-icon name="code" color="primary" size="sm" />
                  </div>
                </div>
                <div class="col">
                  <h3 class="text-h5 text-weight-bold gradient-text q-ma-none">Raiful.dev</h3>
                </div>
              </div>
              <p class="text-body1 text-grey-4 q-mb-md">
                Frontend Developer specializing in Vue.js, Quasar, and Django. Building modern,
                responsive web applications with clean code and exceptional UX.
              </p>

              <!-- Newsletter Subscription -->
              <div class="newsletter q-mt-lg">
                <p class="text-caption text-grey-5 q-mb-xs">Stay updated with my latest projects</p>
                <div class="row q-gutter-sm">
                  <q-input
                    dense
                    outlined
                    placeholder="Your email"
                    class="newsletter-input"
                    bg-color="grey-9"
                    color="white"
                  />
                  <q-btn dense color="primary" label="Subscribe" size="sm" />
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="col-12 col-md-2">
            <h4 class="text-h6 text-weight-bold text-white q-mb-md">Quick Links</h4>
            <q-list class="footer-links" dense>
              <q-item clickable v-ripple to="/" class="footer-link">
                <q-item-section>
                  <span class="link-text">Home</span>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/about" class="footer-link">
                <q-item-section>
                  <span class="link-text">About</span>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/projects" class="footer-link">
                <q-item-section>
                  <span class="link-text">Projects</span>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/contact" class="footer-link">
                <q-item-section>
                  <span class="link-text">Contact</span>
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <!-- Technologies -->
          <div class="col-12 col-md-3">
            <h4 class="text-h6 text-weight-bold text-white q-mb-md">Technologies</h4>
            <div class="technologies q-gutter-xs">
              <q-chip
                v-for="tech in technologies"
                :key="tech"
                dense
                outline
                color="grey-4"
                text-color="white"
                size="sm"
                class="tech-chip"
              >
                {{ tech }}
              </q-chip>
            </div>

            <!-- Contact Info -->
            <div class="contact-info q-mt-lg">
              <div class="row items-center q-mb-xs">
                <q-icon name="email" size="xs" color="grey-4" class="q-mr-sm" />
                <span class="text-caption text-grey-4">contact@raiful.dev</span>
              </div>
              <div class="row items-center">
                <q-icon name="location_on" size="xs" color="grey-4" class="q-mr-sm" />
                <span class="text-caption text-grey-4">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          <!-- Social & Connect -->
          <div class="col-12 col-md-3">
            <h4 class="text-h6 text-weight-bold text-white q-mb-md">Let's Connect</h4>
            <p class="text-body2 text-grey-4 q-mb-md">
              Follow me for the latest updates, projects, and tech insights.
            </p>

            <!-- Social Links -->
            <div class="social-links">
              <div class="row q-gutter-sm">
                <q-btn
                  v-for="social in socials"
                  :key="social.name"
                  round
                  :color="social.color"
                  :icon="social.icon"
                  :href="social.url"
                  target="_blank"
                  size="md"
                  class="social-btn"
                >
                  <q-tooltip>{{ social.tooltip }}</q-tooltip>
                </q-btn>
              </div>
            </div>

            <!-- Back to Top -->
            <div class="back-to-top q-mt-lg">
              <q-btn
                outline
                round
                color="grey-4"
                icon="expand_less"
                @click="scrollToTop"
                class="back-top-btn"
              >
                <q-tooltip>Back to top</q-tooltip>
              </q-btn>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom q-px-lg q-py-md">
        <q-separator color="grey-8" class="q-mb-md" />

        <div class="row justify-between items-center">
          <div class="col-auto">
            <span class="text-caption text-grey-5">
              © {{ year }} Raiful Islam. All rights reserved.
            </span>
          </div>

          <div class="col-auto">
            <div class="row items-center q-gutter-md">
              <q-btn
                flat
                dense
                color="grey-5"
                label="Privacy Policy"
                size="sm"
                class="policy-link"
              />
              <q-btn
                flat
                dense
                color="grey-5"
                label="Terms of Service"
                size="sm"
                class="policy-link"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-footer>
</template>

<script setup>
import { ref } from 'vue'

const year = new Date().getFullYear()

const socials = ref([
  {
    name: 'GitHub',
    icon: 'code',
    url: 'https://github.com/raifulislam',
    color: 'grey-9',
    tooltip: 'View my code on GitHub',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://linkedin.com/in/raifulislam',
    color: 'blue',
    tooltip: 'Connect on LinkedIn',
  },
  {
    name: 'Twitter',
    icon: 'twitter',
    url: 'https://twitter.com/raifulislam',
    color: 'blue-3',
    tooltip: 'Follow on Twitter',
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    url: 'https://instagram.com/raifulislam',
    color: 'pink',
    tooltip: 'Follow on Instagram',
  },
  {
    name: 'Email',
    icon: 'email',
    url: 'mailto:contact@raiful.dev',
    color: 'red',
    tooltip: 'Send me an email',
  },
])

const technologies = ref([
  'Vue.js',
  'Quasar',
  'Django',
  'TypeScript',
  'Pinia',
  'Firebase',
  'REST APIs',
  'SCSS',
])

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<style scoped>
.app-footer {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  position: relative;
  overflow: hidden;
}

.app-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--q-primary), transparent);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Brand Section */
.brand-section .brand-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(var(--q-primary-rgb), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.gradient-text {
  background: linear-gradient(135deg, var(--q-primary) 0%, var(--q-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.newsletter-input {
  flex: 1;
}

.newsletter-input :deep(.q-field__control) {
  border-radius: 6px;
}

/* Footer Links */
.footer-links {
  background: transparent;
}

.footer-link {
  padding: 6px 0;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.footer-link:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateX(5px);
}

.link-text {
  color: var(--q-grey-4);
  font-weight: 400;
  transition: color 0.3s ease;
}

.footer-link:hover .link-text {
  color: white;
}

/* Technologies */
.technologies {
  display: flex;
  flex-wrap: wrap;
}

.tech-chip {
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.tech-chip:hover {
  background: rgba(var(--q-primary-rgb), 0.2);
  border-color: var(--q-primary);
  transform: translateY(-2px);
}

/* Social Links */
.social-links {
  display: flex;
  gap: 8px;
}

.social-btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.social-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition:
    width 0.6s,
    height 0.6s;
}

.social-btn:hover::before {
  width: 300%;
  height: 300%;
}

.social-btn:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* Back to Top */
.back-top-btn {
  transition: all 0.3s ease;
}

.back-top-btn:hover {
  transform: translateY(-3px);
  border-color: var(--q-primary);
  color: var(--q-primary);
}

/* Footer Bottom */
.footer-bottom {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

.policy-link {
  transition: all 0.3s ease;
}

.policy-link:hover {
  color: white !important;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .main-footer {
    padding: 2rem 1rem !important;
  }

  .row.q-col-gutter-xl {
    margin-top: 1rem;
  }
}

@media (max-width: 768px) {
  .footer-container {
    padding: 0 1rem;
  }

  .brand-section {
    text-align: center;
    margin-bottom: 2rem;
  }

  .brand-section .row.items-center {
    justify-content: center;
  }

  .newsletter .row {
    flex-direction: column;
    gap: 0.5rem;
  }

  .newsletter-input {
    width: 100%;
  }

  .technologies {
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }

  .back-to-top {
    text-align: center;
  }

  .footer-bottom .row {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .main-footer {
    padding: 1.5rem 0.5rem !important;
  }

  .text-h6 {
    font-size: 1rem;
  }

  .text-body1,
  .text-body2 {
    font-size: 0.875rem;
  }

  .social-btn {
    width: 40px;
    height: 40px;
    min-height: 40px;
  }

  .tech-chip {
    font-size: 0.75rem;
  }

  .policy-link {
    font-size: 0.75rem;
  }
}

/* Animation for footer appear */
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

.app-footer {
  animation: fadeInUp 0.8s ease;
}
</style>

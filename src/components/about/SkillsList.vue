<template>
  <section class="skills-section q-pa-xl">
    <!-- Main Skills Card -->
    <q-card flat bordered class="my-card q-pa-xl q-mb-xl">
      <div class="row items-center q-mb-lg">
        <div class="col-auto">
          <div class="icon-wrapper bg-primary q-pa-sm rounded-borders">
            <q-icon name="code" color="white" size="md" />
          </div>
        </div>
        <div class="col q-ml-md">
          <h2 class="text-h4 text-weight-bold q-ma-none">Technical Skills</h2>
          <p class="text-grey-6 q-mt-xs">Technologies & frameworks I work with</p>
        </div>
      </div>

      <div class="row q-col-gutter-lg">
        <div
          class="col-12 col-md-4 skill-category"
          v-for="(category, index) in skillCategories"
          :key="index"
        >
          <q-card flat bordered class="category-card q-pa-lg">
            <div class="row items-center q-mb-md">
              <div class="col-auto">
                <div :class="`category-icon bg-${category.color}`">
                  <q-icon :name="category.icon" color="white" size="sm" />
                </div>
              </div>
              <div class="col q-ml-sm">
                <div class="text-h6 text-weight-medium">{{ category.title }}</div>
              </div>
            </div>
            <div class="q-gutter-sm">
              <q-chip
                v-for="skill in category.skills"
                :key="skill"
                :color="category.color"
                text-color="white"
                class="skill-chip q-px-md"
              >
                {{ skill }}
              </q-chip>
            </div>
          </q-card>
        </div>
      </div>
    </q-card>

    <!-- Technical Expertise Section -->
    <div class="technical-expertise-section">
      <div class="row items-center q-mb-lg">
        <div class="col-auto">
          <div class="icon-wrapper bg-secondary q-pa-sm rounded-borders">
            <q-icon name="engineering" color="white" size="md" />
          </div>
        </div>
        <div class="col q-ml-md">
          <h3 class="text-h4 text-weight-bold q-ma-none">Technical Expertise</h3>
          <p class="text-grey-6 q-mt-xs">Advanced problem-solving & optimization skills</p>
        </div>
      </div>

      <div class="row q-col-gutter-lg">
        <!-- Database Optimization -->
        <div class="col-12 col-md-6 expertise-category">
          <q-card flat bordered class="expertise-card q-pa-lg">
            <div class="row items-center q-mb-md">
              <div class="col-auto">
                <div class="expertise-icon bg-deep-purple">
                  <q-icon name="database" color="white" size="md" />
                </div>
              </div>
              <div class="col q-ml-md">
                <h4 class="text-h6 text-weight-bold q-ma-none">Database Optimization</h4>
                <p class="text-caption text-grey-6 q-mt-xs">
                  Performance tuning & query optimization
                </p>
              </div>
            </div>

            <q-list dense class="expertise-list">
              <q-item>
                <q-item-section avatar>
                  <q-icon name="flash_on" color="positive" size="sm" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>N+1 Query Problem Solving</q-item-label>
                  <q-item-label caption
                    >Using select_related, prefetch_related, and optimized QuerySets</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon name="speed" color="positive" size="sm" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>PostgreSQL Performance Tuning</q-item-label>
                  <q-item-label caption
                    >Query optimization, indexing strategies, and connection pooling</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon name="sync_lock" color="positive" size="sm" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Race Condition Prevention</q-item-label>
                  <q-item-label caption
                    >Atomic transactions, database locks, and F() expressions</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon name="search" color="positive" size="sm" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Query Optimization & Indexing</q-item-label>
                  <q-item-label caption
                    >EXPLAIN ANALYZE, query plan optimization, and proper indexing</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-list>

            <div class="q-mt-md">
              <q-chip
                v-for="tech in databaseTech"
                :key="tech"
                dense
                outline
                color="deep-purple"
                size="sm"
                class="q-mr-xs q-mb-xs"
              >
                {{ tech }}
              </q-chip>
            </div>
          </q-card>
        </div>

        <!-- Authentication & Security -->
        <div class="col-12 col-md-6 expertise-category">
          <q-card flat bordered class="expertise-card q-pa-lg">
            <div class="row items-center q-mb-md">
              <div class="col-auto">
                <div class="expertise-icon bg-red">
                  <q-icon name="security" color="white" size="md" />
                </div>
              </div>
              <div class="col q-ml-md">
                <h4 class="text-h6 text-weight-bold q-ma-none">Authentication & Security</h4>
                <p class="text-caption text-grey-6 q-mt-xs">
                  Session management, JWT, and secure APIs
                </p>
              </div>
            </div>

            <q-list dense class="expertise-list">
              <q-item>
                <q-item-section avatar>
                  <q-icon name="cookie" color="positive" size="sm" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Session-based Authentication</q-item-label>
                  <q-item-label caption
                    >Secure session management with Django sessions and Redis</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon name="vpn_key" color="positive" size="sm" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>JWT (JSON Web Tokens)</q-item-label>
                  <q-item-label caption
                    >Stateless authentication with access/refresh token rotation</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon name="shield" color="positive" size="sm" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Cookie Security</q-item-label>
                  <q-item-label caption
                    >HttpOnly, Secure, SameSite flags with CSRF protection</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon name="api" color="positive" size="sm" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Secure API Design</q-item-label>
                  <q-item-label caption
                    >Rate limiting, input validation, and proper error handling</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-list>

            <div class="q-mt-md">
              <q-chip
                v-for="tech in authTech"
                :key="tech"
                dense
                outline
                color="red"
                size="sm"
                class="q-mr-xs q-mb-xs"
              >
                {{ tech }}
              </q-chip>
            </div>

            <!-- Code Snippet -->
            <div class="code-snippet q-mt-md">
              <div class="code-header bg-grey-9 text-white q-pa-xs text-caption">
                Django JWT Authentication Example
              </div>
              <pre class="bg-dark text-white q-pa-sm rounded-borders" style="font-size: 0.7rem">
# settings.py
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=7),
    'ROTATE_REFRESH_TOKENS': True,
    'BLACKLIST_AFTER_ROTATION': True,
    'AUTH_COOKIE': 'access_token',
    'AUTH_COOKIE_SECURE': True,
    'AUTH_COOKIE_HTTP_ONLY': True,
    'AUTH_COOKIE_SAMESITE': 'Lax',
}</pre
              >
            </div>
          </q-card>
        </div>

        <!-- Real-time Systems -->
        <div class="col-12 col-md-6 expertise-category">
          <q-card flat bordered class="expertise-card q-pa-lg">
            <div class="row items-center q-mb-md">
              <div class="col-auto">
                <div class="expertise-icon bg-blue">
                  <q-icon name="wifi" color="white" size="md" />
                </div>
              </div>
              <div class="col q-ml-md">
                <h4 class="text-h6 text-weight-bold q-ma-none">Real-time Systems</h4>
                <p class="text-caption text-grey-6 q-mt-xs">WebSocket, caching & live data sync</p>
              </div>
            </div>

            <q-list dense class="expertise-list">
              <q-item>
                <q-item-section avatar>
                  <q-icon name="hub" color="positive" size="sm" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Django Channels + WebSocket</q-item-label>
                  <q-item-label caption
                    >Real-time communication, consumer groups, and async handling</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon name="cached" color="positive" size="sm" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Redis Caching & Pub/Sub</q-item-label>
                  <q-item-label caption
                    >Multi-level caching, pub/sub messaging, and cache invalidation</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon name="sync" color="positive" size="sm" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Real-time Data Sync</q-item-label>
                  <q-item-label caption
                    >Live updates, state synchronization, and conflict resolution</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon name="notifications_active" color="positive" size="sm" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Live Notifications</q-item-label>
                  <q-item-label caption
                    >Push notifications, real-time alerts, and event-driven systems</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-list>

            <div class="q-mt-md">
              <q-chip
                v-for="tech in realtimeTech"
                :key="tech"
                dense
                outline
                color="blue"
                size="sm"
                class="q-mr-xs q-mb-xs"
              >
                {{ tech }}
              </q-chip>
            </div>
          </q-card>
        </div>

        <!-- Backend Architecture -->
        <div class="col-12 col-md-6 expertise-category">
          <q-card flat bordered class="expertise-card q-pa-lg">
            <div class="row items-center q-mb-md">
              <div class="col-auto">
                <div class="expertise-icon bg-teal">
                  <q-icon name="architecture" color="white" size="md" />
                </div>
              </div>
              <div class="col q-ml-md">
                <h4 class="text-h6 text-weight-bold q-ma-none">Backend Architecture</h4>
                <p class="text-caption text-grey-6 q-mt-xs">
                  Scalable, secure, and maintainable systems
                </p>
              </div>
            </div>

            <q-list dense class="expertise-list">
              <q-item>
                <q-item-section avatar>
                  <q-icon name="storage" color="positive" size="sm" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>RESTful API Design</q-item-label>
                  <q-item-label caption
                    >Clean APIs with proper versioning and documentation</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon name="dns" color="positive" size="sm" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Microservices Communication</q-item-label>
                  <q-item-label caption
                    >Service-to-service auth with JWT and API gateways</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon name="settings" color="positive" size="sm" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Configuration Management</q-item-label>
                  <q-item-label caption
                    >Environment-based configs with Django settings</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon name="monitoring" color="positive" size="sm" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Monitoring & Logging</q-item-label>
                  <q-item-label caption>Sentry, ELK stack, and performance monitoring</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>

            <div class="q-mt-md">
              <q-chip
                v-for="tech in architectureTech"
                :key="tech"
                dense
                outline
                color="teal"
                size="sm"
                class="q-mr-xs q-mb-xs"
              >
                {{ tech }}
              </q-chip>
            </div>

            <!-- Cookie Security Example -->
            <div class="code-snippet q-mt-md">
              <div class="code-header bg-grey-9 text-white q-pa-xs text-caption">
                Secure Cookie Configuration
              </div>
              <pre class="bg-dark text-white q-pa-sm rounded-borders" style="font-size: 0.7rem">
# Django Session Configuration
SESSION_ENGINE = 'django.contrib.sessions.backends.cached_db'
SESSION_COOKIE_AGE = 1209600  # 2 weeks
SESSION_COOKIE_SECURE = True
SESSION_COOKIE_HTTPONLY = True
SESSION_COOKIE_SAMESITE = 'Lax'
CSRF_COOKIE_SECURE = True
CSRF_COOKIE_HTTPONLY = True</pre
              >
            </div>
          </q-card>
        </div>
      </div>

      <!-- Security Implementation Examples -->
      <div class="security-examples q-mt-xl">
        <q-card flat bordered class="security-card q-pa-lg">
          <div class="row items-center q-mb-md">
            <div class="col-auto">
              <q-icon name="verified_user" color="positive" size="md" />
            </div>
            <div class="col q-ml-md">
              <h4 class="text-h5 text-weight-bold q-ma-none">Security Implementation Examples</h4>
              <p class="text-grey-6 q-mt-xs">Production-ready security patterns I've implemented</p>
            </div>
          </div>

          <div class="row q-col-gutter-md">
            <div class="col-12 col-md-6">
              <div class="security-pattern">
                <h6 class="text-subtitle1 text-weight-bold q-mb-xs">🔐 JWT Authentication Flow</h6>
                <ol class="text-body2 q-pl-md">
                  <li>User login with credentials</li>
                  <li>Server validates and issues JWT token</li>
                  <li>Token stored in HttpOnly cookie</li>
                  <li>Auto token refresh before expiry</li>
                  <li>Secure logout with token blacklisting</li>
                </ol>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="security-pattern">
                <h6 class="text-subtitle1 text-weight-bold q-mb-xs">🍪 Session Management</h6>
                <ol class="text-body2 q-pl-md">
                  <li>Session storage in Redis for performance</li>
                  <li>Secure cookie configuration</li>
                  <li>Session fixation prevention</li>
                  <li>Idle session timeout</li>
                  <li>Concurrent session control</li>
                </ol>
              </div>
            </div>
          </div>
        </q-card>
      </div>

      <!-- Performance Metrics -->
      <div class="performance-metrics q-mt-xl">
        <q-card flat bordered class="metrics-card q-pa-lg">
          <div class="text-center q-mb-lg">
            <h4 class="text-h5 text-weight-bold q-ma-none">Security & Performance Impact</h4>
            <p class="text-grey-6 q-mt-xs">Real-world improvements achieved</p>
          </div>

          <div class="row justify-center q-col-gutter-xl">
            <div class="col-auto text-center">
              <div class="metric-value">
                <q-icon name="security" color="positive" size="md" class="q-mr-sm" />
                <span class="text-h4 text-weight-bold">0</span>
              </div>
              <div class="text-caption text-grey-6">Security Breaches</div>
            </div>

            <div class="col-auto text-center">
              <div class="metric-value">
                <q-icon name="trending_up" color="blue" size="md" class="q-mr-sm" />
                <span class="text-h4 text-weight-bold">85%</span>
              </div>
              <div class="text-caption text-grey-6">Faster Auth</div>
            </div>

            <div class="col-auto text-center">
              <div class="metric-value">
                <q-icon name="query_builder" color="deep-purple" size="md" class="q-mr-sm" />
                <span class="text-h4 text-weight-bold">95%</span>
              </div>
              <div class="text-caption text-grey-6">Cache Hit Rate</div>
            </div>

            <div class="col-auto text-center">
              <div class="metric-value">
                <q-icon name="storage" color="orange" size="md" class="q-mr-sm" />
                <span class="text-h4 text-weight-bold">70%</span>
              </div>
              <div class="text-caption text-grey-6">Query Reduction</div>
            </div>

            <div class="col-auto text-center">
              <div class="metric-value">
                <q-icon name="bolt" color="red" size="md" class="q-mr-sm" />
                <span class="text-h4 text-weight-bold">&lt;200ms</span>
              </div>
              <div class="text-caption text-grey-6">API Response</div>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

// Main skill categories
const skillCategories = ref([
  {
    title: 'Frontend',
    skills: [
      'Vue.js ',
      'Quasar',
      'Pinia',
      'GraphQL',
      'Axios',
      'SCSS',
      'HTML5',
      'CSS3',
      'Bootstrap',
    ],
    color: 'primary',
    icon: 'computer',
  },
  {
    title: 'Backend',
    skills: ['Django', 'Django REST', 'Python', 'PostgreSQL', 'Redis', 'Celery'],
    color: 'secondary',
    icon: 'storage',
  },
  {
    title: 'Security & DevOps',
    skills: ['JWT', 'OAuth2', 'Docker', 'AWS', 'CI/CD', 'Nginx'],
    color: 'accent',
    icon: 'security',
  },
])

// Database technologies
const databaseTech = ref([
  'PostgreSQL',
  'Indexing',
  'Query Plans',
  'Connection Pooling',
  'Transaction Management',
  'Database Locks',
  'Performance Monitoring',
])

// Authentication technologies
const authTech = ref([
  'JWT',
  'Session Cookies',
  'OAuth2',
  'CSRF Protection',
  'CORS',
  'Rate Limiting',
  'Input Validation',
  'Password Hashing',
])

// Real-time technologies
const realtimeTech = ref([
  'Django Channels',
  'WebSocket',
  'Redis Pub/Sub',
  'ASGI',
  'Real-time Sync',
  'Live Updates',
  'Event-driven Architecture',
])

// Architecture technologies
const architectureTech = ref([
  'REST APIs',
  'Microservices',
  'Message Queues',
  'API Gateways',
  'Load Balancing',
  'Service Discovery',
  'Circuit Breakers',
])

// Animations
onMounted(() => {
  // Animate skill categories
  gsap.from('.skill-category', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.skills-section',
      start: 'top 80%',
    },
  })

  // Animate expertise cards
  gsap.from('.expertise-category', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.technical-expertise-section',
      start: 'top 70%',
    },
  })

  // Animate security examples
  gsap.from('.security-pattern', {
    x: -30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.security-examples',
      start: 'top 80%',
    },
  })

  // Animate performance metrics
  gsap.from('.metric-value', {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.performance-metrics',
      start: 'top 80%',
    },
  })
})
</script>

<style scoped>
.skills-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}

.my-card {
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  background: white;
}

.icon-wrapper {
  border-radius: 12px;
}

/* Category Cards */
.category-card {
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--q-primary);
}

.category-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-chip {
  transition: all 0.2s ease;
  border-radius: 8px;
}

.skill-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Expertise Cards */
.technical-expertise-section {
  margin-top: 4rem;
}

.expertise-card {
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  background: white;
}

.expertise-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.expertise-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.expertise-list .q-item {
  border-radius: 8px;
  margin-bottom: 4px;
  transition: all 0.2s ease;
}

.expertise-list .q-item:hover {
  background: rgba(0, 0, 0, 0.02);
  transform: translateX(5px);
}

/* Code Snippets */
.code-snippet {
  margin-top: 1rem;
}

.code-header {
  border-radius: 6px 6px 0 0;
  font-family: 'Courier New', monospace;
}

.code-snippet pre {
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  line-height: 1.4;
  margin: 0;
  border-radius: 0 0 6px 6px;
  overflow-x: auto;
}

/* Security Examples */
.security-card {
  border-radius: 15px;
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(33, 150, 243, 0.05) 100%);
  border: 1px solid rgba(76, 175, 80, 0.2);
}

.security-pattern {
  background: white;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.security-pattern:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.security-pattern ol {
  margin: 0;
}

.security-pattern li {
  margin-bottom: 0.25rem;
}

/* Performance Metrics */
.metrics-card {
  border-radius: 15px;
  background: linear-gradient(
    135deg,
    rgba(var(--q-primary-rgb), 0.05) 0%,
    rgba(var(--q-secondary-rgb), 0.05) 100%
  );
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.metric-value {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.metric-value .text-h4 {
  transition: all 0.3s ease;
  cursor: pointer;
}

.metric-value .text-h4:hover {
  transform: scale(1.1);
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .skills-section {
    padding: 2rem 1rem !important;
  }

  .my-card {
    padding: 1.5rem !important;
  }

  .skill-category {
    margin-bottom: 1rem;
  }

  .expertise-card {
    margin-bottom: 1rem;
  }

  .security-examples .row {
    flex-direction: column;
  }

  .security-pattern {
    margin-bottom: 1rem;
  }

  .performance-metrics .row {
    flex-direction: column;
    gap: 2rem;
  }
}

@media (max-width: 480px) {
  .text-h4 {
    font-size: 1.5rem;
  }

  .text-h6 {
    font-size: 1rem;
  }

  .expertise-list .q-item {
    padding: 8px;
  }

  .metric-value .text-h4 {
    font-size: 2rem;
  }

  .code-snippet pre {
    font-size: 0.65rem;
  }
}
</style>

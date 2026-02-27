<!-- src/pages/BackendExpertise.vue -->
<template>
  <q-page padding class="bg-grey-1">
    <!-- Hero Section -->
    <section class="hero-section text-center q-mb-xl">
      <div class="hero-badge q-mb-md">
        <q-badge rounded color="secondary" class="q-px-lg q-py-xs">
          <q-icon name="storage" class="q-mr-xs" /> Backend Architecture
        </q-badge>
      </div>
      <h1 class="text-h2 text-weight-bold gradient-text q-mb-sm">
        Database & Performance Optimization
      </h1>
      <p class="text-h5 text-grey-7 max-width-700 q-mx-auto">
        Expert solutions for complex backend challenges in Django, PostgreSQL, and real-time systems
      </p>
    </section>

    <!-- Performance Optimization Section -->
    <section class="optimization-section q-mb-xl">
      <div class="section-header text-center q-mb-xl">
        <h2 class="text-h3 text-weight-bold q-mb-md">Performance Optimization</h2>
        <p class="text-h6 text-grey-7">Solving critical database and caching challenges</p>
      </div>

      <div class="row q-col-gutter-xl">
        <!-- N+1 Query Problem -->
        <div class="col-12 col-md-6">
          <q-card flat bordered class="expertise-card">
            <div class="card-icon bg-red-1 text-red">
              <q-icon name="speed" size="lg" />
            </div>
            <h3 class="text-h5 text-weight-bold q-mb-sm">N+1 Query Problem</h3>
            <p class="text-body1 text-grey-7 q-mb-md">
              Optimized database queries by reducing N+1 issues using Django's
              <code>select_related</code>, <code>prefetch_related</code>, and custom QuerySet
              optimizations.
            </p>

            <div class="solution-details">
              <h4 class="text-h6 text-weight-medium q-mb-sm">Solutions Implemented:</h4>
              <q-list dense>
                <q-item>
                  <q-item-section avatar>
                    <q-icon name="check_circle" color="positive" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Reduced query count from 100+ to 1-3 per page</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section avatar>
                    <q-icon name="check_circle" color="positive" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Page load time improved by 85%</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section avatar>
                    <q-icon name="check_circle" color="positive" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Database CPU usage reduced by 70%</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>

            <div class="code-snippet q-mt-md">
              <pre class="bg-dark text-white q-pa-md rounded-borders">
# Before: N+1 Problem
products = Product.objects.all()
for product in products:
    print(product.category.name)  # New query for each product

# After: Optimized with select_related
products = Product.objects.select_related('category').all()
for product in products:
    print(product.category.name)  # No additional queries</pre
              >
            </div>
          </q-card>
        </div>

        <!-- Race Conditions -->
        <div class="col-12 col-md-6">
          <q-card flat bordered class="expertise-card">
            <div class="card-icon bg-blue-1 text-blue">
              <q-icon name="sync" size="lg" />
            </div>
            <h3 class="text-h5 text-weight-bold q-mb-sm">Race Conditions & Concurrency</h3>
            <p class="text-body1 text-grey-7 q-mb-md">
              Implemented atomic transactions, database locks, and optimistic concurrency control to
              prevent data corruption in high-traffic applications.
            </p>

            <div class="solution-details">
              <h4 class="text-h6 text-weight-medium q-mb-sm">Techniques Used:</h4>
              <div class="q-gutter-sm q-mb-md">
                <q-chip color="blue" text-color="white" icon="lock">Database Locks</q-chip>
                <q-chip color="blue" text-color="white" icon="transaction"
                  >Atomic Transactions</q-chip
                >
                <q-chip color="blue" text-color="white" icon="update">Optimistic Locking</q-chip>
                <q-chip color="blue" text-color="white" icon="queue">Celery Queues</q-chip>
              </div>
            </div>

            <div class="code-snippet q-mt-md">
              <pre class="bg-dark text-white q-pa-md rounded-borders">
# Preventing race conditions with F() expressions
from django.db.models import F
from django.db import transaction

@transaction.atomic
def update_inventory(product_id, quantity):
    product = Product.objects.select_for_update().get(id=product_id)
    if product.stock >= quantity:
        product.stock = F('stock') - quantity
        product.save()
        return True
    return False</pre
              >
            </div>
          </q-card>
        </div>
      </div>
    </section>

    <!-- Caching Strategies -->
    <section class="caching-section q-mb-xl">
      <h2 class="text-h3 text-weight-bold text-center q-mb-lg">Advanced Caching Strategies</h2>

      <div class="row q-col-gutter-xl">
        <div class="col-12 col-md-4">
          <q-card flat bordered class="caching-card">
            <div class="text-center q-mb-md">
              <q-icon name="cached" color="orange" size="xl" />
            </div>
            <h3 class="text-h5 text-weight-bold text-center q-mb-sm">Redis Caching</h3>
            <ul class="text-body1 q-pl-md">
              <li>Implemented multi-level caching (L1/L2)</li>
              <li>Cache invalidation strategies</li>
              <li>Real-time cache warming</li>
              <li>Reduced database load by 90%</li>
            </ul>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card flat bordered class="caching-card">
            <div class="text-center q-mb-md">
              <q-icon name="database" color="green" size="xl" />
            </div>
            <h3 class="text-h5 text-weight-bold text-center q-mb-sm">Database Optimization</h3>
            <ul class="text-body1 q-pl-md">
              <li>PostgreSQL query optimization</li>
              <li>Index optimization strategies</li>
              <li>Connection pooling with PGBouncer</li>
              <li>Query execution plan analysis</li>
            </ul>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card flat bordered class="caching-card">
            <div class="text-center q-mb-md">
              <q-icon name="timer" color="purple" size="xl" />
            </div>
            <h3 class="text-h5 text-weight-bold text-center q-mb-sm">Performance Metrics</h3>
            <ul class="text-body1 q-pl-md">
              <li>API response time: &lt; 200ms</li>
              <li>Cache hit rate: 95%+</li>
              <li>Database queries reduced: 80%</li>
              <li>Concurrent users: 10,000+</li>
            </ul>
          </q-card>
        </div>
      </div>
    </section>

    <!-- Real-time Systems -->
    <section class="realtime-section q-mb-xl">
      <div class="section-header text-center q-mb-xl">
        <h2 class="text-h3 text-weight-bold q-mb-md">Real-time Systems Architecture</h2>
        <p class="text-h6 text-grey-7">WebSockets, Django Channels, and Redis for live data</p>
      </div>

      <div class="architecture-diagram q-mb-xl">
        <q-card flat bordered class="q-pa-lg">
          <div class="text-center q-mb-lg">
            <h4 class="text-h5 text-weight-bold">Real-time Architecture Stack</h4>
          </div>

          <div class="row justify-center items-center q-col-gutter-lg">
            <div class="col-auto">
              <div class="tech-stack-item">
                <q-icon name="language" color="green" size="xl" />
                <div class="text-subtitle1 q-mt-sm">Django</div>
              </div>
            </div>
            <div class="col-auto">
              <div class="arrow">→</div>
            </div>
            <div class="col-auto">
              <div class="tech-stack-item">
                <q-icon name="hub" color="blue" size="xl" />
                <div class="text-subtitle1 q-mt-sm">Channels</div>
              </div>
            </div>
            <div class="col-auto">
              <div class="arrow">→</div>
            </div>
            <div class="col-auto">
              <div class="tech-stack-item">
                <q-icon name="storage" color="red" size="xl" />
                <div class="text-subtitle1 q-mt-sm">Redis</div>
              </div>
            </div>
            <div class="col-auto">
              <div class="arrow">→</div>
            </div>
            <div class="col-auto">
              <div class="tech-stack-item">
                <q-icon name="wifi" color="orange" size="xl" />
                <div class="text-subtitle1 q-mt-sm">WebSocket</div>
              </div>
            </div>
            <div class="col-auto">
              <div class="arrow">→</div>
            </div>
            <div class="col-auto">
              <div class="tech-stack-item">
                <q-icon name="devices" color="purple" size="xl" />
                <div class="text-subtitle1 q-mt-sm">Client</div>
              </div>
            </div>
          </div>

          <div class="architecture-details q-mt-lg">
            <h5 class="text-h6 text-weight-medium q-mb-sm">Implemented Features:</h5>
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-6">
                <q-list dense>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon name="notifications" color="primary" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Live notifications system</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon name="forum" color="primary" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Real-time chat applications</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon name="track_changes" color="primary" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Live dashboard updates</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
              <div class="col-12 col-md-6">
                <q-list dense>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon name="sync" color="primary" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Collaborative editing</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon name="location_on" color="primary" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Real-time GPS tracking</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon name="show_chart" color="primary" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Live analytics dashboards</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
          </div>
        </q-card>
      </div>

      <!-- Code Examples -->
      <div class="realtime-code">
        <h4 class="text-h5 text-weight-bold q-mb-md">Implementation Examples</h4>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6">
            <q-card flat bordered class="code-example">
              <div class="code-header bg-blue-grey-9 text-white q-pa-sm">
                <span>Django Channels Consumer</span>
              </div>
              <pre class="q-pa-md bg-dark text-white">
class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()
        await self.channel_layer.group_add(
            "chat_room",
            self.channel_name
        )
    
    async def receive(self, text_data):
        data = json.loads(text_data)
        await self.channel_layer.group_send(
            "chat_room",
            {
                "type": "chat_message",
                "message": data["message"]
            }
        )
    
    async def chat_message(self, event):
        await self.send(text_data=json.dumps({
            "message": event["message"]
        }))</pre
              >
            </q-card>
          </div>
          <div class="col-12 col-md-6">
            <q-card flat bordered class="code-example">
              <div class="code-header bg-blue-grey-9 text-white q-pa-sm">
                <span>Redis Caching Implementation</span>
              </div>
              <pre class="q-pa-md bg-dark text-white">
from django.core.cache import cache
from django.views.decorators.cache import cache_page

@cache_page(60 * 15)  # Cache for 15 minutes
def expensive_view(request):
    data = cache.get('expensive_data')
    if not data:
        data = expensive_database_query()
        cache.set('expensive_data', data, 60 * 15)
    return JsonResponse(data)

# Real-time cache invalidation
def update_data(request):
    # Update database
    new_data = update_database()
    # Invalidate cache immediately
    cache.delete('expensive_data')
    # Signal real-time update via WebSocket
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(
        "data_updates",
        {"type": "data_updated", "data": new_data}
    )</pre
              >
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies -->
    <section class="case-studies q-mb-xl">
      <h2 class="text-h3 text-weight-bold text-center q-mb-lg">
        Performance Improvement Case Studies
      </h2>

      <div class="row q-col-gutter-xl">
        <div class="col-12 col-md-6">
          <q-card flat bordered class="case-study-card">
            <div class="case-study-header bg-primary text-white q-pa-md">
              <h4 class="text-h5 text-weight-bold q-ma-none">E-commerce Platform</h4>
            </div>
            <div class="q-pa-md">
              <div class="row justify-between items-center q-mb-md">
                <div class="col">
                  <div class="text-h6">Problem</div>
                  <p class="text-caption">
                    Slow product listings with 100+ database queries per page
                  </p>
                </div>
                <div class="col-auto">
                  <q-badge color="red" label="Critical" />
                </div>
              </div>

              <div class="row justify-between items-center q-mb-md">
                <div class="col">
                  <div class="text-h6">Solution</div>
                  <p class="text-caption">
                    Implemented <code>prefetch_related</code> with Redis caching
                  </p>
                </div>
                <div class="col-auto">
                  <q-badge color="green" label="Solved" />
                </div>
              </div>

              <q-linear-progress :value="0.95" color="positive" class="q-mb-sm" />
              <div class="row justify-between">
                <span class="text-caption">Before: 100+ queries</span>
                <span class="text-caption">After: 3 queries</span>
              </div>
            </div>
          </q-card>
        </div>

        <div class="col-12 col-md-6">
          <q-card flat bordered class="case-study-card">
            <div class="case-study-header bg-secondary text-white q-pa-md">
              <h4 class="text-h5 text-weight-bold q-ma-none">Real-time Analytics Dashboard</h4>
            </div>
            <div class="q-pa-md">
              <div class="row justify-between items-center q-mb-md">
                <div class="col">
                  <div class="text-h6">Problem</div>
                  <p class="text-caption">
                    Dashboard updates every 30 seconds causing race conditions
                  </p>
                </div>
                <div class="col-auto">
                  <q-badge color="red" label="Critical" />
                </div>
              </div>

              <div class="row justify-between items-center q-mb-md">
                <div class="col">
                  <div class="text-h6">Solution</div>
                  <p class="text-caption">
                    Django Channels + Redis for real-time WebSocket updates
                  </p>
                </div>
                <div class="col-auto">
                  <q-badge color="green" label="Solved" />
                </div>
              </div>

              <q-linear-progress :value="0.9" color="positive" class="q-mb-sm" />
              <div class="row justify-between">
                <span class="text-caption">Before: 30s delay</span>
                <span class="text-caption">After: Real-time</span>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section text-center q-mb-xl">
      <q-card flat bordered class="cta-card q-pa-xl">
        <h3 class="text-h3 text-weight-bold q-mb-md">Need Performance Optimization?</h3>
        <p class="text-h6 text-grey-7 q-mb-xl max-width-600 q-mx-auto">
          Let me help you solve complex backend challenges and optimize your application's
          performance.
        </p>
        <q-btn
          unelevated
          color="primary"
          size="lg"
          icon="rocket_launch"
          label="Discuss Your Project"
          to="/contact"
          class="q-px-xl"
        />
      </q-card>
    </section>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Animate cards on scroll
  gsap.from('.expertise-card', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.optimization-section',
      start: 'top 70%',
    },
  })

  gsap.from('.caching-card', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.caching-section',
      start: 'top 70%',
    },
  })

  gsap.from('.tech-stack-item', {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.architecture-diagram',
      start: 'top 70%',
    },
  })

  gsap.from('.case-study-card', {
    x: -30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.case-studies',
      start: 'top 70%',
    },
  })
})
</script>

<style scoped>
/* Hero Section */
.hero-section {
  padding: 3rem 0;
}

.hero-badge {
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

.max-width-700 {
  max-width: 700px;
}

/* Expertise Cards */
.expertise-card {
  border-radius: 15px;
  padding: 2rem;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.expertise-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.card-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

/* Code Snippets */
.code-snippet pre {
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
  overflow-x: auto;
  margin: 0;
}

/* Caching Cards */
.caching-card {
  border-radius: 15px;
  padding: 1.5rem;
  height: 100%;
  text-align: center;
  transition: all 0.3s ease;
}

.caching-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

/* Architecture Diagram */
.architecture-diagram {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 20px;
}

.tech-stack-item {
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
  background: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.tech-stack-item:hover {
  transform: scale(1.05);
}

.arrow {
  font-size: 2rem;
  color: var(--q-grey-6);
}

/* Code Examples */
.code-example {
  border-radius: 10px;
  overflow: hidden;
}

.code-header {
  font-family: 'Courier New', monospace;
  font-weight: 600;
}

.code-example pre {
  font-size: 0.875rem;
  line-height: 1.4;
  margin: 0;
  max-height: 300px;
  overflow-y: auto;
}

/* Case Studies */
.case-study-card {
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.case-study-card:hover {
  transform: translateY(-5px);
}

.case-study-header {
  border-radius: 15px 15px 0 0;
}

/* CTA Section */
.cta-card {
  background: linear-gradient(
    135deg,
    rgba(var(--q-primary-rgb), 0.05) 0%,
    rgba(var(--q-secondary-rgb), 0.05) 100%
  );
  border-radius: 20px;
  border: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    padding: 2rem 0;
  }

  .text-h2 {
    font-size: 2rem;
  }

  .text-h3 {
    font-size: 1.5rem;
  }

  .expertise-card,
  .caching-card {
    padding: 1.5rem;
  }

  .architecture-diagram .row {
    flex-direction: column;
    align-items: center;
  }

  .arrow {
    transform: rotate(90deg);
    margin: 1rem 0;
  }

  .code-example pre {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .text-h2 {
    font-size: 1.75rem;
  }

  .text-h3 {
    font-size: 1.25rem;
  }

  .code-snippet pre,
  .code-example pre {
    font-size: 0.7rem;
    padding: 0.75rem;
  }
}
</style>

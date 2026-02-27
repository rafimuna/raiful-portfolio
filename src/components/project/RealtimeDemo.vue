<!-- src/components/project/RealtimeDemo.vue -->
<template>
  <q-card flat bordered class="realtime-demo-card q-pa-lg">
    <div class="demo-header row items-center q-mb-lg">
      <div class="col-auto">
        <div class="demo-icon q-pa-sm bg-primary rounded-borders">
          <q-icon name="bolt" color="white" size="md" />
        </div>
      </div>
      <div class="col q-ml-md">
        <h3 class="text-h4 text-weight-bold q-ma-none">Live Demo: Real-time Dashboard</h3>
        <p class="text-grey-6 q-mt-xs q-mb-none">Experience WebSocket-powered live updates</p>
      </div>
      <div class="col-auto">
        <q-badge :color="connectionStatus.color" rounded>
          {{ connectionStatus.text }}
        </q-badge>
      </div>
    </div>

    <!-- Demo Controls -->
    <div class="demo-controls q-mb-lg">
      <div class="row q-gutter-md">
        <q-btn
          outline
          color="primary"
          :icon="isConnected ? 'link_off' : 'link'"
          :label="isConnected ? 'Disconnect' : 'Connect'"
          @click="toggleConnection"
        />
        <q-btn
          outline
          color="secondary"
          icon="refresh"
          label="Simulate Data"
          @click="simulateData"
        />
        <q-select
          v-model="updateFrequency"
          :options="frequencyOptions"
          label="Update Frequency"
          outlined
          dense
          style="min-width: 150px"
        />
      </div>
    </div>

    <!-- Live Metrics Display -->
    <div class="live-metrics q-mb-lg">
      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-4">
          <q-card flat bordered class="metric-card text-center q-pa-md">
            <div class="metric-value text-h3 text-weight-bold text-primary">
              {{ liveMetrics.users }}
            </div>
            <div class="metric-label text-caption text-grey-7">Active Users</div>
            <div class="metric-trend">
              <q-icon
                :name="liveMetrics.userTrend > 0 ? 'arrow_upward' : 'arrow_downward'"
                :color="liveMetrics.userTrend > 0 ? 'positive' : 'negative'"
                size="sm"
              />
              <span class="text-caption q-ml-xs"
                >{{ Math.abs(liveMetrics.userTrend) }} users/min</span
              >
            </div>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card flat bordered class="metric-card text-center q-pa-md">
            <div class="metric-value text-h3 text-weight-bold text-secondary">
              {{ liveMetrics.messages }}
            </div>
            <div class="metric-label text-caption text-grey-7">Messages Sent</div>
            <div class="metric-trend">
              <q-icon name="schedule" color="accent" size="sm" />
              <span class="text-caption q-ml-xs">Real-time updates</span>
            </div>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card flat bordered class="metric-card text-center q-pa-md">
            <div class="metric-value text-h3 text-weight-bold text-accent">
              {{ liveMetrics.responseTime }}ms
            </div>
            <div class="metric-label text-caption text-grey-7">Avg Response Time</div>
            <div class="metric-trend">
              <q-icon
                :name="liveMetrics.responseTrend < 0 ? 'arrow_downward' : 'arrow_upward'"
                :color="liveMetrics.responseTrend < 0 ? 'positive' : 'negative'"
                size="sm"
              />
              <span class="text-caption q-ml-xs"
                >{{ Math.abs(liveMetrics.responseTrend) }}ms change</span
              >
            </div>
          </q-card>
        </div>
      </div>
    </div>

    <!-- Event Log -->
    <div class="event-log q-mb-lg">
      <h5 class="text-h6 text-weight-bold q-mb-sm">Real-time Event Log</h5>
      <q-card flat bordered class="log-container">
        <q-scroll-area style="height: 200px">
          <q-list dense>
            <q-item
              v-for="(event, index) in eventLog"
              :key="index"
              :class="`log-item log-${event.type}`"
            >
              <q-item-section avatar>
                <q-icon :name="event.icon" :color="event.color" size="sm" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ event.message }}</q-item-label>
                <q-item-label caption>{{ formatTime(event.timestamp) }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-card>
    </div>

    <!-- Technology Stack -->
    <div class="tech-stack q-pt-lg" style="border-top: 1px solid rgba(0, 0, 0, 0.1)">
      <h5 class="text-h6 text-weight-bold q-mb-sm">Technologies Used in this Demo</h5>
      <div class="row q-gutter-sm">
        <q-chip
          v-for="tech in technologies"
          :key="tech"
          outline
          color="primary"
          size="sm"
          class="tech-chip"
        >
          {{ tech }}
        </q-chip>
      </div>
    </div>

    <!-- Code Snippet -->
    <div class="code-snippet q-mt-lg">
      <h5 class="text-h6 text-weight-bold q-mb-sm">WebSocket Implementation Example</h5>
      <pre class="code-block bg-dark text-white q-pa-md rounded-borders">
<code>// Django Channels Consumer
class DashboardConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()
        await self.channel_layer.group_add(
            "dashboard_updates",
            self.channel_name
        )
    
    async def receive(self, text_data):
        data = json.loads(text_data)
        # Process real-time data
        await self.send_update(data)
    
    async def send_update(self, data):
        await self.send(text_data=json.dumps({
            'type': 'dashboard.update',
            'data': data,
            'timestamp': timezone.now().isoformat()
        }))

// Vue.js WebSocket Client
const ws = new WebSocket('wss://api.example.com/ws/dashboard/')

ws.onmessage = (event) => {
    const data = JSON.parse(event.data)
    this.updateLiveMetrics(data)
}

// Redis Channel Layer Configuration
CHANNEL_LAYERS = {
    'default': {
        'BACKEND': 'channels_redis.core.RedisChannelLayer',
        'CONFIG': {
            "hosts": [('redis', 6379)],
            "capacity": 1500,
            "expiry": 10,
        },
    },
}</code>
      </pre>
    </div>
  </q-card>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Connection state
const isConnected = ref(true)
const updateFrequency = ref('1s')
const frequencyOptions = ['100ms', '500ms', '1s', '5s', '10s']

// Live metrics
const liveMetrics = ref({
  users: 1245,
  messages: 8923,
  responseTime: 45,
  userTrend: 12,
  responseTrend: -3,
})

// Event log
const eventLog = ref([
  {
    type: 'connection',
    icon: 'link',
    color: 'positive',
    message: 'WebSocket connection established',
    timestamp: new Date(),
  },
  {
    type: 'data',
    icon: 'data_usage',
    color: 'primary',
    message: 'Live data streaming started',
    timestamp: new Date(Date.now() - 5000),
  },
  {
    type: 'update',
    icon: 'update',
    color: 'accent',
    message: 'Metrics updated via WebSocket',
    timestamp: new Date(Date.now() - 3000),
  },
  {
    type: 'user',
    icon: 'person_add',
    color: 'secondary',
    message: 'New user connected to dashboard',
    timestamp: new Date(Date.now() - 2000),
  },
])

// Technologies list
const technologies = ref([
  'Django Channels',
  'WebSocket',
  'Redis',
  'ASGI',
  'Vue.js',
  'Real-time',
  'Pub/Sub',
  'Daphne',
])

// Computed
const connectionStatus = computed(() => {
  return isConnected.value
    ? { color: 'positive', text: 'Connected' }
    : { color: 'negative', text: 'Disconnected' }
})

// Methods
const toggleConnection = () => {
  isConnected.value = !isConnected.value
  addEventLog({
    type: 'connection',
    icon: isConnected.value ? 'link' : 'link_off',
    color: isConnected.value ? 'positive' : 'negative',
    message: isConnected.value ? 'WebSocket reconnected' : 'WebSocket disconnected',
  })

  if (isConnected.value) {
    startDataStream()
  } else {
    stopDataStream()
  }
}

const simulateData = () => {
  // Simulate random data updates
  liveMetrics.value = {
    users: liveMetrics.value.users + Math.floor(Math.random() * 10) - 3,
    messages: liveMetrics.value.messages + Math.floor(Math.random() * 100),
    responseTime: Math.max(20, liveMetrics.value.responseTime + Math.floor(Math.random() * 10) - 5),
    userTrend: Math.floor(Math.random() * 20) - 10,
    responseTrend: Math.floor(Math.random() * 10) - 5,
  }

  addEventLog({
    type: 'data',
    icon: 'refresh',
    color: 'primary',
    message: 'Simulated data update sent via WebSocket',
  })
}

const addEventLog = (event) => {
  eventLog.value.unshift({
    ...event,
    timestamp: new Date(),
  })

  // Keep only last 10 events
  if (eventLog.value.length > 10) {
    eventLog.value.pop()
  }
}

const formatTime = (date) => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
}

let intervalId = null

const startDataStream = () => {
  const frequencyMap = {
    '100ms': 100,
    '500ms': 500,
    '1s': 1000,
    '5s': 5000,
    '10s': 10000,
  }

  if (intervalId) clearInterval(intervalId)

  intervalId = setInterval(() => {
    if (isConnected.value) {
      simulateData()
    }
  }, frequencyMap[updateFrequency.value])
}

const stopDataStream = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

// Lifecycle
onMounted(() => {
  startDataStream()
})

onUnmounted(() => {
  stopDataStream()
})
</script>

<style scoped>
.realtime-demo-card {
  border-radius: 20px;
  border: 2px solid rgba(var(--q-primary-rgb), 0.1);
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}

.demo-icon {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.metric-card {
  border-radius: 12px;
  transition: all 0.3s ease;
}

.metric-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.metric-trend {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
}

.log-container {
  border-radius: 8px;
  max-height: 200px;
}

.log-item {
  border-left: 3px solid transparent;
  transition: all 0.3s ease;
}

.log-item:hover {
  background: rgba(0, 0, 0, 0.02);
}

.log-connection {
  border-left-color: var(--q-positive);
}

.log-data {
  border-left-color: var(--q-primary);
}

.log-update {
  border-left-color: var(--q-accent);
}

.log-user {
  border-left-color: var(--q-secondary);
}

.tech-chip {
  transition: all 0.3s ease;
}

.tech-chip:hover {
  transform: translateY(-2px);
  background: rgba(var(--q-primary-rgb), 0.1);
}

.code-block {
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

pre {
  margin: 0;
}

code {
  color: #f8f8f2;
  background: transparent;
}
</style>

<template>
  <q-card class="filter-card">
    <q-card-section class="bg-grey-2">
      <div class="row justify-between items-center">
        <h3 class="text-h6 q-ma-none">Filter Projects</h3>
        <q-btn round flat icon="close" @click="$emit('close')" />
      </div>
    </q-card-section>

    <q-card-section class="q-pa-lg">
      <!-- Status Filter -->
      <div class="q-mb-lg">
        <h4 class="text-subtitle1 text-weight-medium q-mb-sm">Status</h4>
        <div class="row q-gutter-sm">
          <q-btn
            v-for="status in statuses"
            :key="status.id"
            :outline="selectedStatus !== status.id"
            :color="selectedStatus === status.id ? 'primary' : 'grey-7'"
            :label="status.label"
            size="sm"
            @click="selectedStatus = status.id"
          />
        </div>
      </div>

      <!-- Category Filter -->
      <div class="q-mb-lg">
        <h4 class="text-subtitle1 text-weight-medium q-mb-sm">Category</h4>
        <div class="row q-gutter-sm">
          <q-btn
            v-for="category in categories"
            :key="category.id"
            :outline="selectedCategory !== category.id"
            :color="selectedCategory === category.id ? 'primary' : 'grey-7'"
            :label="category.name"
            :icon="category.icon"
            size="sm"
            @click="updateCategory(category.id)"
          />
        </div>
      </div>

      <!-- Featured Filter -->
      <div class="q-mb-lg">
        <q-toggle
          v-model="onlyFeatured"
          color="primary"
          label="Show only featured projects"
          left-label
        />
      </div>

      <!-- Sort Options -->
      <div class="q-mb-lg">
        <h4 class="text-subtitle1 text-weight-medium q-mb-sm">Sort By</h4>
        <q-option-group v-model="sortBy" :options="sortOptions" color="primary" inline />
      </div>

      <!-- Reset Button -->
      <div class="q-mt-xl">
        <q-btn
          unelevated
          color="grey-7"
          label="Reset All Filters"
          class="full-width"
          @click="resetFilters"
        />
      </div>
    </q-card-section>

    <!-- Apply Button -->
    <q-card-actions class="q-pa-lg">
      <q-btn
        unelevated
        color="primary"
        label="Apply Filters"
        class="full-width"
        @click="applyFilters"
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['update:selectedCategory', 'close'])

defineProps({
  categories: {
    type: Array,
    required: true,
  },
})

// Local state
const selectedStatus = ref('all')
const onlyFeatured = ref(false)
const sortBy = ref('date-desc')

// Status options
const statuses = [
  { id: 'all', label: 'All' },
  { id: 'completed', label: 'Completed' },
  { id: 'in-progress', label: 'In Progress' },
  { id: 'planned', label: 'Planned' },
]

// Sort options
const sortOptions = [
  { label: 'Newest First', value: 'date-desc' },
  { label: 'Oldest First', value: 'date-asc' },
  { label: 'A-Z', value: 'name-asc' },
  { label: 'Z-A', value: 'name-desc' },
]

// Methods
const updateCategory = (categoryId) => {
  emit('update:selectedCategory', categoryId)
}

const resetFilters = () => {
  selectedStatus.value = 'all'
  onlyFeatured.value = false
  sortBy.value = 'date-desc'
  emit('update:selectedCategory', 'all')
}

const applyFilters = () => {
  emit('close')
}
</script>

<style scoped>
.filter-card {
  width: 320px;
  height: 100vh;
  border-radius: 0;
}

.q-btn {
  border-radius: 8px;
  text-transform: capitalize;
}

.q-btn--outline {
  border-width: 1px;
}
</style>

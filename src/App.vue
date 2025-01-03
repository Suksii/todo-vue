<script setup>
import Task from './components/Task.vue';
import { Icon } from '@iconify/vue';
import { computed } from "vue"

const tasks = [
  {
    id: 1,
    status: 'Completed',
    title: 'Title 1',
    description: 'Description 1',
    date: '2024-12-30',
  },
  {
    id: 2,
    status: 'To Do',
    title: 'Title 2',
    description: 'Description 2',
    date: '2024-12-31',
  },
  {
    id: 3,
    status: 'In Progress',
    title: 'Title 3',
    description: 'Description 3',
    date: '2025-01-05',
  },
  {
    id: 4,
    status: 'Completed',
    title: 'Title 4',
    description: 'Description 4',
    date: '2024-12-28',
  },
  {
    id: 5,
    status: 'In Progress',
    title: 'Title 5',
    description: 'Description 5',
    date: '2025-01-02',
  },
];

import { ref } from 'vue';
import SearchInput from './components/SearchInput.vue'

const statuses = ["To Do", "In Progress", "Completed"]


const searchQuery = ref("");
const filteredTasks = computed(() => {
  return tasks.filter(task => {
    const query = searchQuery.value.toLowerCase().trim();

    return (task.title.toLowerCase().includes(query) || task.status.toLowerCase().includes(query)
    )
  })
})
const taskCount = computed(() => {
  return statuses.reduce((counts, status) => {
    counts[status] = tasks.filter(task => task.status === status).length
    return counts
  }, {})
})


</script>

<template>
  <div class="container">
    <SearchInput v-model="searchQuery" />
    <div class="tasks-container" v-if="filteredTasks.length > 0">
      <div v-for="status in statuses" :key="status" class="status-column">
        <div :class="[status.toLowerCase().replace(' ', '-'), 'status']">
          <h2 class="status-title">{{ status }}</h2>
          <p class="status-count">{{ taskCount[status] }}</p>
        </div>
        <div class="task-list">
          <Task v-for="task in filteredTasks.filter(task => task.status === status)" :key="task.id" :task="task" />
        </div>
      </div>
    </div>
    <div v-else class="no-tasks">No tasks</div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 6rem 0;
  height: 100vh;

}

.tasks-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 350px;
}

.status {
  display: flex;
  align-items: center;
  padding: 2px 4px;
  margin-bottom: 20px;
  justify-content: space-between;
}

.status h2 {
  padding: 0;
  color: white
}

.status-count {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  aspect-ratio: 1 / 1;
  border-radius: 6px;
  font-weight: bold;
  font-size: 26px;
}

.completed {
  background-color: #4caf50;
  color: #4caf50;
}

.in-progress {
  background-color: #ff9800;
  color: #ff9800;
}

.to-do {
  background-color: #2196f3;
  color: #2196f3;
}
.no-tasks {
  font-size: x-large;
  font-weight: bold;
}
</style>

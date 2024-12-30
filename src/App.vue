<script setup>
import Task from './components/Task.vue';
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

const statuses = ["To Do", "In Progress", "Completed"]


</script>

<template>
  <div class="tasks-container">
    <div v-for="status in statuses" :key="status">
      <h2>{{ status }}</h2>
      <div class="task-list">
        <Task v-for="task in tasks.filter(task => task.status === status)" :key="task.id" :task="task" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.tasks-container {
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
}

.tasks-container h2 {
  padding: 20px 0 50px 0px;
  text-align: center;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>

<script setup>
import Task from './components/Task.vue';

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
</script>

<template>
  <div class="tasks-container">
    <div v-for="task in tasks" :key="task.id">
      <Task :task="task" />
    </div>
  </div>

</template>

<style scoped>
.tasks-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}

.rss {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

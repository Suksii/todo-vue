<script setup>
import Task from './components/Task.vue';
import { computed, ref } from "vue"
import { uid } from 'uid'
import SearchInput from './components/SearchInput.vue'
import Modal from './components/Modal.vue';

const tasks = ref([
  {
    id: uid(),
    status: 'Completed',
    title: 'Title 1',
    description: 'Description 1',
    date: '2024-12-30',
  },
  {
    id: uid(),
    status: 'To Do',
    title: 'Title 2',
    description: 'Description 2',
    date: '2024-12-31',
  },
  {
    id: uid(),
    status: 'In Progress',
    title: 'Title 3',
    description: 'Description 3',
    date: '2025-01-05',
  },
  {
    id: uid(),
    status: 'Completed',
    title: 'Title 4',
    description: 'Description 4',
    date: '2024-12-28',
  },
  {
    id: uid(),
    status: 'In Progress',
    title: 'Title 5',
    description: 'Description 5',
    date: '2025-01-02',
  },
]);

const formatDate = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day}. ${month} ${year}.`
}

const statuses = ref(["To Do", "In Progress", "Completed"])
const searchQuery = ref("");
const showAddModal = ref(false);
const newTask = ref({
  id: null,
  title: '',
  description: '',
  status: '',
  date: formatDate()
})

const openAddModal = (status) => {
  newTask.value = {
    id: null,
    title: '',
    description: '',
    status,
    date: formatDate()
  }
  showAddModal.value = true;
}

const closeAddModal = () => {
  showAddModal.value = false;
}

const addTask = (task) => {
  tasks.value.push({ ...task, id: uid() });
  closeAddModal();
}

const filteredTasks = computed(() => {
  return tasks.value.filter(task => {
    const query = searchQuery.value.toLowerCase().trim();
    return (task.title.toLowerCase().includes(query) || task.status.toLowerCase().includes(query)
    )
  })
})
const taskCount = computed(() => {
  return statuses.value.reduce((counts, status) => {
    counts[status] = tasks.value.filter(task => task.status === status).length
    return counts
  }, {})
})

const deleteTask = (taskId) => {
  tasks.value = tasks.value.filter(task => task.id !== taskId)
}

const editTask = (updatedTask) => {
  const index = tasks.value.findIndex(task => task.id === updatedTask.id);
  if (index !== -1) {
    tasks.value[index] = updatedTask;
  }
};

</script>

<template>
  <div class="container">
    <SearchInput v-model="searchQuery" />
    <div class="tasks-container">
      <div v-for="status in statuses" :key="status" class="status-column">
        <div :class="[status.toLowerCase().replace(' ', '-'), 'status']">
          <h2 class="status-title">{{ status }}</h2>
          <p class="status-count">{{ taskCount[status] }}</p>
        </div>
        <div class="task-list">
          <Task v-for="task in filteredTasks.filter(task => task.status === status)" :key="task.id" :task="task"
            :statuses="statuses" @delete="deleteTask" @edit="editTask" />
          <button :class="[status.toLowerCase().replace(' ', '-')]" @click="openAddModal(status)">Add task</button>
          <Modal v-if="showAddModal" :task="newTask" :statuses="statuses" @close="closeAddModal" @save="addTask" />
        </div>
      </div>
    </div>
    <div v-if="filteredTasks.length === 0" class="no-tasks">No tasks</div>
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

.task-list button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
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
  padding-top: 6rem;
}
</style>

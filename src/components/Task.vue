<template>
    <div class="task-container" :class="statusClass">
        <div class="status">
            <div class="dot" :class="statusClass"></div>
            <span>{{ task.status }}</span>
        </div>
        <div class="title">
            <h3>{{ task.title }}</h3>
        </div>
        <div class="description">
            <p>{{ task.description }}</p>
        </div>
        <div class="date">
            <font-awesome-icon :icon="['far', 'calendar']" class="icon" />
            <p>{{ task.date }}</p>
        </div>
    </div>
</template>
<script setup>

import { computed } from 'vue';

const props = defineProps(['task'])

const statusClass = (computed(() => {
    switch (props.task.status) {
        case 'Completed':
            return 'status-completed';
        case 'To Do':
            return 'status-to-do';
        case 'In Progress':
            return 'status-in-progress'
        default: return ''
    }
}))

</script>

<style scoped>
.task-container {
    display: flex;
    flex-direction: column;
    padding: 14px;
    box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.15);
    min-width: 200px;
    width: fit-content;
}

.status {
    display: flex;
    align-items: center;
    gap: 6px;
    width: fit-content;
    padding: 2px 10px;
    border-radius: 6px;
}

.dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
}

.title {
    padding: 12px 0;
}

.description {
    color: #4b4949;
}

.date {
    padding: 12px 0;
    display: flex;
    align-items: center;
    gap: 6px;
}

.status-to-do {
    border-top: 3px solid blue;
}

.status-to-do .dot {
    background: blue;
}

.status-completed {
    border-top: 3px solid red;
}

.status-completed .dot {
    background: red;
}

.status-in-progress {
    border-top: 3px solid green;
}

.status-in-progress .dot {
    background: green;
}
</style>

<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';
import { reactive, watch } from 'vue';

const props = defineProps({
    showModal: Boolean,
    task: {
        type: Object,
        default: () => ({ id: null, title: '', description: '', status: '' })
    },
    statuses: Array
})

const emits = defineEmits(['close', 'save']);

const updatedTask = reactive({ ...props.task });

watch(() => props.task,
    (newTask) => {
        Object.assign(updatedTask, newTask);
    },
    { immediate: true }
);

const saveChanges = () => {
    emits('save', updatedTask);
    emits('close');
}

</script>
<template>
    <div class="modal-bg">
        <div class="modal-container">
            <Icon icon="material-symbols:close-small-outline" width="24" height="24" class="close-modal"
                @click="emits('close')" />
            <h3 v-if="updatedTask.id" class="modal-title">{{ 'Change task - ' + updatedTask.id }}</h3>
            <h3 v-else class="modal-title">Add new task</h3>
            <div class="input-data">
                <label>{{ updatedTask.id ? 'Change title' : 'Add title' }}</label>
                <input v-model="updatedTask.title" />
            </div>
            <div class="input-data">
                <label>{{ updatedTask.id ? 'Change description' : 'Add description' }}</label>
                <input v-model="updatedTask.description" />
            </div>
            <div class="input-data">
                <label>Select status</label>
                <select v-model="updatedTask.status">
                    <option v-for="status in statuses" :key="status" :value="status">{{ status }}</option>
                </select>
            </div>
            <div class="actions">
                <button class="save-button" @click="saveChanges">Save</button>
                <button @click="emits('close')" class="close-button">Close</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-bg {
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-container {
    position: relative;
    width: 480px;
    min-width: 350px;
    background: #fff;
    border-radius: 10px;
    padding: 15px;
}

.modal-title {
    text-align: center;
    padding: 10px 0;
}

.close-modal {
    position: absolute;
    right: 0;
    top: 0;
    margin: 5px;
    cursor: pointer;
}

.actions {
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: flex-end;
    padding: 25px 5px;
}

button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

.save-button {
    background-color: #4CAF50;
    color: white;
}

.save-button:hover {
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.close-button {
    background-color: #f44336;
    color: white;
}

.close-button:hover {
    background-color: #d32f2f;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.input-data {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px 0;
}

.input-data label {
    font-size: 14px;
    color: #333;
}

.input-data input,
.input-data select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
}
</style>
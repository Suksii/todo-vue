<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';

defineProps({ showModal: Boolean })

const emit = defineEmits(['close'])

</script>
<template>
    <div class="modal-bg">
        <div class="modal-container">
            <Icon icon="material-symbols:close-small-outline" width="24" height="24" class="close-modal"
                @click="$emit('close')" />
            <div class="actions">
                <button class="save-button">Save</button>
                <button @click="$emit('close')" class="close-button">Close</button>
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
    width: 300px;
    height: 250px;
    background: #fff;
    border-radius: 10px;
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
    border-radius: 8px;
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
</style>
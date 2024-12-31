<script setup>

const props = defineProps({
    modelValue: String,
})

const emit = defineEmits(["update:modelValue"])

const updateQuery = (e) => {
    emit("update:modelValue", e.target.value)
}

</script>

<template>
    <div class="input-field">
        <font-awesome-icon icon="magnifying-glass" class="icon" />
        <input placeholder="Search task" :value="modelValue" @input="updateQuery" />
    </div>
</template>

<style scoped>
.input-field {
    position: relative;
    margin-bottom: 6rem;
    width: 100%;
    max-width: 400px;
}

.input-field .icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    font-size: 1.2rem;
    color: #9ca3af;
}

.input-field input {
    width: 100%;
    padding: 10px 15px 10px 35px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.input-field input:focus {
    border-color: #3b82f6;
    box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3);
}

.input-field input::placeholder {
    color: #9ca3af;
    font-style: italic;
}
</style>
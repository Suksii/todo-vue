<template>
    <div class="task-container">
        <div class="status">
            <div class="dot"></div>
            <span>Status</span>
        </div>
        <div class="title">
            <h3>Title</h3>
        </div>
        <div class="description">
            <p>Description</p>
        </div>
        <div class="date">
            <p>Date</p>
        </div>
    </div>
</template>
<script setup></script>

<style scoped>
.task-container {
    display: flex;
    flex-direction: column;
    padding: 14px;
    border-top: 3px solid red;
    box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.15);
    min-width: 200px;
    width: fit-content;
}

.status {
    display: flex;
    align-items: center;
    gap: 6px;
    width: fit-content;
    border: 1px solid red;
    padding: 2px 10px;
    border-radius: 6px;
}

.dot {
    width: 5px;
    height: 5px;
    background: red;
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
}
</style>

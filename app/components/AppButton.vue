<script setup>
defineProps({
    isLoading: {
        type: Boolean,
    },
    type: {
        type: String,
        default: 'submit',
    }
})
</script>

<template>
    <button class="button" :type="type" :disabled="isLoading">
        <span v-if="isLoading" class="loader"></span>
        <slot v-else />
    </button>
</template>

<style scoped>
.button {
    padding: var(--range-xs) var(--range-s);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--white-color);
    color: var(--secondary-color);
    border: 1px solid var(--secondary-color);
    border-radius: 10px;
    font-family: "Forum", Sans-serif;
    font: var(--font-s);
    font-weight: bold;
    transition: background-color 200ms linear;
    min-width: 100px;
    min-height: 50px;
    cursor: pointer;
}

.button[disabled] {
    pointer-events: none
}

.button:hover:not(:active) {
    background-color: #e0e0e0;
}

.button:active {
    background-color: #b1b0b0;
}

.loader {
    width: 24px;
    height: 24px;
    border: 2px solid var(--secondary-color);
    border-bottom-color: transparent;
    border-radius: 50%;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
} 
</style>
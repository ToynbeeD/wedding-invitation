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
    <button class="button" :type="type">
        <slot />
    </button>
</template>

<style scoped>
.button {
    padding: var(--range-xs) var(--range-s);
    cursor: pointer;
    background-color: var(--white-color);
    color: var(--secondary-color);
    border: 1px solid var(--secondary-color);
    border-radius: 10px;
    font-family: "Forum", Sans-serif;
    font: var(--font-s);
    font-weight: bold;
    transition: background-color 200ms linear;
}

.button:hover:not(:active) {
    background-color: #e0e0e0;
}

.button:active {
    background-color: #b1b0b0;
}
</style>
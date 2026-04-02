<script setup></script>

<template>
    <h2 class="section-header">
        <slot />
    </h2>
</template>

<style scoped>
.section-header {
    color: var(--primary-color);
    font: var(--font-xxl)
}
</style>
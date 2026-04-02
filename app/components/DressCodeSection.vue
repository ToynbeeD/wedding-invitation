<script setup>
const COLORS = [
    '#FFD1DC',
    '#F7E7CE',
    '#E6CCE6',
    '#FFF9C4',
    '#C1DFF0',
    '#DDE5B6',
    '#C9CBA3',
]
</script>

<template>
    <section class="section dress-code">
        <div class="container">
            <SectionHeader>ДРЕСС-КОД</SectionHeader>
            <HeartDivider class="section-divider" />
            <p class="dress-code-text">
                <span>
                    Мы будем очень рады, если в своих образах вы поддержите цветовую палитру нашего праздника.
                </span>
                <span>
                    Однако, пожалуйста, не воспринимайте это как строгое требование — для нас самое главное, чтобы вы чувствовали себя комфортно и разделили с нами этот важный день.
                </span>
            </p>

            <ul class="dress-code-list">
                <li v-for="color in COLORS" :key="color" class="dress-code-list-item" :style="{backgroundColor: color}"></li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.section-divider {
    margin-bottom: var(--range-m);
}

.dress-code-text {
    margin-bottom: var(--range-l);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--range-l);
}

.dress-code-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--range-m);
}

.dress-code-list-item {
    flex-shrink: 0;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    transition: transform 100ms linear;
    cursor: pointer;
}

.dress-code-list-item:hover {
    transform: scale(120%);
}
</style>
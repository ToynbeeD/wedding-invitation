<script setup>
const COLORS = [
    '#F3B0C3',
    '#FEE1E8',
    '#FCF2F3',
    '#DBE6D8',
    '#C9CBA3',
    '#B9CBE8',
    '#CDDEEF',
    '#FFFFDB',
    '#F9E9D5',
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
                <li
                    v-for="color in COLORS"
                    :key="color"
                    class="dress-code-list-item"
                >
                    <button
                        class="color-button"
                        :style="{ backgroundColor: color }"
                    ></button>
                </li>
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
    justify-content: center;
    width: 100%;
}

.dress-code-list-item {
    flex: 1 1 40px;
}

.color-button {
    border: none;
    outline: none;
    width: 100%;
    height: 120px;
    transition: transform 100ms linear;
    cursor: pointer;
}

.color-button:hover,
.color-button:focus {
    transform: scale(120%);
}
</style>
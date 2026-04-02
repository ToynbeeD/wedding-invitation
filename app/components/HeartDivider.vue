<script setup>
import HeartImage from '/img/heart.svg'
import WhiteHeartImage from '/img/heart-white.svg'

const props = defineProps({
    color: {
        type: String,
        default: 'var(--primary-color)'
    }
})

const heartType = computed(() => props.color === 'var(--primary-color)' ? HeartImage : WhiteHeartImage)
</script>

<template>
    <div class="divider">
        <span class="heart" :style="{backgroundImage: `url(${heartType})`}"></span>
    </div>
</template>

<style scoped>
.divider {
    padding: var(--range-s) var(--range-l);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.divider::before,
.divider::after {
    content: "";
    display: block;
    flex-grow: 1;
    border-block-end: 0;
    border-block-start: 1px solid v-bind(color);
}

.heart {
    margin: 0 var(--range-xs);
    height: 20px;
    width: 20px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
<script setup>
const END_DATE = new Date('2026-05-28T15:00:00');

const timer = ref(null);
const isFinished = ref(false);

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);



function updateTimer() {
    const now = new Date();
    const diff = END_DATE - now;

    if(diff <= 0){
        isFinished.value = true;
        clearInterval(timer.value);
        return;
    }

    days.value = Math.floor(diff / (1000*60*60*24));
    hours.value = Math.floor((diff / (1000*60*60)) % 24);
    minutes.value = Math.floor((diff / (1000*60)) % 60);
    seconds.value = Math.floor((diff / 1000) % 60);
}

onMounted(() => {
    updateTimer();
    timer.value = setInterval(updateTimer, 1000);
})
</script>

<template>
    <section class="section countdown-section">
        <div class="container">
            <h2 class="section-header">ДО СВАДЬБЫ ОСТАЛОСЬ</h2>

            <div class="time-wrapper">
                <div class="time-unit">
                    <span class="time">{{ days }}</span>
                    <span>Дни</span>
                </div>
                <div class="time-unit">
                    <span class="time">{{ hours }}</span>
                    <span>Часы</span>
                </div>
                <div class="time-unit">
                    <span class="time">{{ minutes }}</span>
                    <span>Минуты</span>
                </div>
                <div class="time-unit">
                    <span class="time">{{ seconds }}</span>
                    <span>Секунды</span>
                </div>
            </div>
        </div>

        <div class="dark-bg"></div>
    </section>
</template>

<style scoped>
.countdown-section {
    padding-bottom: var(--range-xl);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-image: url('img/countdown-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 400px;
    overflow: hidden;
    color: var(--white-color);
}

.section-header {
    margin-bottom: var(--range-m);
    font: var(--font-xl);
    text-shadow: var(--text-shadow);
}

.time-wrapper {
    display: flex;
    justify-content: space-around;
    width: 100%;
}

.time-unit {
    display: flex;
    flex-direction: column;
    align-items: center;
    font: var(--font-xs)
}

.time {
    font: var(--font-xxl)
}

.dark-bg {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: var(--black-color);
    opacity: .3;
    z-index: 1;
}
</style>
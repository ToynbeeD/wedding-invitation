<script setup>
import { gsap } from "gsap";

onMounted(() => {
    gsap.set('.logo-letters', { autoAlpha: 1 });
    gsap.set('.animate', { autoAlpha: 1 });
    gsap.set('.chevron-down', { autoAlpha: 1 });

    const tl = gsap.timeline();

    tl.from('.logo-letters', {
        yPercent: 100,
        autoAlpha: 0,
        duration: 1,
    });

    tl.from('.animate', {
        yPercent: -50,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 1,
    })

    tl.from('.chevron-down', {
        y: 20,
        autoAlpha: 0,
    })

    tl.to('.chevron-down', {
        y: 10,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
    })
})
</script>

<template>
    <section class="section hero-section">
        <p class="logo-letters">DK</p>
        <div class="container hero-container">
            <h1 class="animate invite-text">ПРИГЛАШЕНИЕ НА СВАДЬБУ</h1>
            <HeartDivider class="animate" color="var(--white-color)" />
            <p class="animate invite-text">28.05.2026</p>
        </div>
        
        <div class="dark-shadow"></div>
        <div class="chevron-down"></div>
    </section>
</template>

<style scoped>
.logo-letters,
.animate,
.chevron-down {
  opacity: 0;
}

.hero-section {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-top: var(--range-xl);
    padding-bottom: var(--range-xl);
    height: calc(100vh - 50px);
    min-height: 600px;
    max-height: 900px;
    background-image: url('img/hero.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: var(--white-color);
    text-shadow: var(--text-shadow);
}

.logo-letters {
    margin-bottom: auto;
    align-self: center;
    display: block;
    font-family: "Italiana", sans-serif;
    font-weight: 500;
    font-size: 140px;
    line-height: 1;
    color: #333;
    pointer-events: none;
}

.hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.dark-shadow {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60%;

    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.7) 100%
    );

    pointer-events: none;
    z-index: 1;
}

.invite-text {
    font-size: var(--font-size-l);
    font-weight: 500;
}

.chevron-down {
    position: absolute;
    bottom: 40px;
    left: calc(50% - 15px); 
    width: 30px;
    height: 30px;
    background-image: url('img/chevron-down.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    z-index: 10;
}
</style>
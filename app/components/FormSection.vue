<script setup>
import { gsap } from "gsap";

const CONFETTI_COUNT = 200;
const CONFETTI_COLORS = ["#d13470", "#ffba00", "#aaaacc", "#1651ba"];

const confettiContainer = ref();
const confettiDot = ref();
const confettiCount = ref(0);

const animateConfetti = (dotElement, containerWidth, containerHeight) => {
    gsap.set(dotElement, {
        x: `random(0, ${containerWidth})`,
        y: 'random(-200,-150)',
        z: 'random(-200,-200)',
        opacity: 1,
        scale: 'random(0.5, 1)',
        backgroundColor: `random([${CONFETTI_COLORS}])`
    });

    gsap.to(dotElement, {
        y: containerHeight + 100,
        duration: 'random(4,8)',
        ease: 'linear.none',
        repeat: -1,
        delay: -15,
    })

    gsap.to(dotElement, {
        x: 'random([+=100,-=100])',
        rotationZ: 'random(0,360)',
        duration: 'random(2,6)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.InOut',
    })

    gsap.to(dotElement, {
        duration: 'random(2,8)',
        rotationX: 'random(0,360)',
        rotationY: 'random(0,360)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.InOut',
        delay: -5,
    })
}

const confetti = async () => {
    if (!confettiContainer.value) return

    confettiCount.value = CONFETTI_COUNT;
    await nextTick();

    const conteinerWidth = confettiContainer.value.clientWidth;
    const conteinerHeight = confettiContainer.value.clientHeight;

    gsap.set(confettiContainer.value, {
        zIndex: 1000,
        opacity: 1,
    })

    for (let i = 0; i < confettiCount.value; i++){
        if (!confettiDot.value[i]) continue;
        animateConfetti(confettiDot.value[i], conteinerWidth, conteinerHeight);
    }

    gsap.to(confettiContainer.value, {
        autoAlpha: 0,
        zIndex: -1,
        delay: 3,
    })
}
</script>

<template>
    <section class="section form-section">
        <div ref="confettiContainer" class="confetti-container">
            <div v-for="value in confettiCount" :key="value" ref="confettiDot" class="dot"></div>
        </div>

        <div class="container">
            <SectionHeader>АНКЕТА ГОСТЯ</SectionHeader>
            <HeartDivider class="section-divider" />

            <p class="form-description">
                Подтвердите, пожалуйста, свое присутствие на празднике до 11.05.2026
            </p>

            <ContactForm @success="confetti()" />
        </div>

        <div class="white-shadow"></div>
    </section>
</template>

<style scoped>
.confetti-container {
    position: fixed;
    inset: 0;
    z-index: -1;
    opacity: 0;
    overflow: hidden;
}

.dot {
    position: absolute;
    width: 12px;
    height: 18px;
    opacity: 0.9;
    transform-style: preserve-3d;
}

.form-section {
    background-image: url('/img/section-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.section-divider {
    margin-bottom: var(--range-m);
}

.form-description {
    margin-bottom: var(--range-m);
}
</style>
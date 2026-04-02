<script></script>

<template>
    <section class="section hero-section">
        <p class="logo-letters">DK</p>
        <div class="container hero-container">
            <h1 class="invite-text">ПРИГЛАШЕНИЕ НА СВАДЬБУ</h1>
            <HeartDivider color="var(--white-color)" />
            <p class="invite-text">28.05.2026</p>
        </div>

        <div class="dark-shadow"></div>
    </section>
</template>

<style scoped>
.hero-section {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-top: var(--range-xl);
    padding-bottom: var(--range-xl);
    height: 100vh;
    min-height: 600px;
    max-height: 900px;
    background-image: url('/img/hero.jpg');
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
</style>
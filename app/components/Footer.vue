<script setup></script>

<template>
   <footer class="footer">
        <div class="container">
            <p class="top-text">Будем рады видеть Вас на нашем празднике!</p>
            <div class="logo-wrapper">
                <img class="logo" src="/img/logo.png" alt="Денис и Ксения">
            </div>
            <p>28.05.2026</p>
            <HeartDivider class="section-divider" />

            <p class="bottom-text">
                По организационным вопросам можете обращаться к&nbsp;нашему&nbsp;координатору:
                Варвара&nbsp;+7 900-000-0000
            </p>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    padding-bottom: var(--range-xl);
}
.top-text {
    font: var(--font-m);
    margin-bottom: var(--range-m);
}

.logo-wrapper {
    width: 100%;
}

.logo {
    width: 100%;
    height: 100%;
}

.bottom-text {
    margin-top: var(--range-l);
    font: var(--font-xs);
    font-weight: 500;
    color: #5E5E5C;
}
</style>
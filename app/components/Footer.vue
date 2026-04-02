<script setup></script>

<template>
   <footer class="footer">
        <div class="container">
            <p class="bottom-text">
                По организационным вопросам в день мероприятия вы&nbsp;можете обращаться к&nbsp;нашему&nbsp;координатору:
                Варвара&nbsp;<a class="tel-link" href="tel:+79161122848">+7 916-112-2848</a>
            </p>

            <p class="top-text">Будем рады видеть Вас на нашем празднике!</p>
            <div class="logo-wrapper">
                <img class="logo" src="/img/logo.png" alt="Денис и Ксения">
            </div>
            <p>28.05.2026</p>
            <HeartDivider class="section-divider" />
        </div>
    </footer>
</template>

<style scoped>
.footer {
    padding-bottom: var(--range-l);
}

.top-text {
    font: var(--font-m);
    margin-bottom: var(--range-l);
}

.logo-wrapper {
    width: 100%;
}

.logo {
    width: 100%;
    height: 100%;
}

.bottom-text {
    margin-bottom: var(--range-l);
    font: var(--font-m);
    font-weight: 500;
    color: var(--primary-color);
}

.tel-link {
    color: var(--secondary-color);
    font: inherit;
    text-decoration: underline;
    text-wrap: nowrap;
}
</style>
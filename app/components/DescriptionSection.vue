<script></script>

<template>
    <section class="section description-section">
        <div class="container">
            <p class="decription-text">
                <span>
                    Приглашаем Вас на торжество, посвященное нашему бракосочетанию, которое состоится
                </span>
                <span class="date-text">28 МАЯ 2026 г.</span>
                <span>
                    По адресу: Московская обл., деревня&nbsp;Подрезово, яхт-клуб «Родина».
                </span>
                <span>Сбор гостей в 15:00</span>
                <span>Будем счастливы видеть Вас на нашем празднике!</span>
                <span>С уважением,</span>
            </p>
            <div class="logo-wrapper">
                <img class="logo" src="/img/logo.png" alt="Денис и Ксения">
            </div>
        </div>

        <div class="white-shadow"></div>
    </section>
</template>

<style scoped>
.description-section {
    background-image: url('/img/section-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.decription-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--font-size-l);
    font-weight: 500;
    text-align: center;
    gap: var(--range-l);
}

.date-text {
    color: var(--primary-color);
    font: var(--font-xxl)
}

.logo-wrapper {
    width: 100%;
    height: 60px;
}

.logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>
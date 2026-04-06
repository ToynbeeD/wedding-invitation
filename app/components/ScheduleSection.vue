<script setup></script>

<template>
    <section class="section schedule-section">
        <div class="container">
            <SectionHeader>ПРОГРАММА ДНЯ</SectionHeader>
            <HeartDivider class="section-divider" />
            <ul>
                <li>
                    <p>
                        <span class="schedule-time">15.00</span>
                        Сбор гостей
                    </p>
                    <span class="schedule-list-arrow-down"></span>
                </li>
                <li>
                    <p>
                        <span class="schedule-time">16.00</span>
                        Церемония бракосочетания
                    </p>
                    <span class="schedule-list-arrow-down"></span>
                </li>
                <li>
                    <p>
                        <span class="schedule-time">17.00</span>
                        Начало банкета
                    </p>
                    <span class="schedule-list-arrow-down"></span>
                </li>
                <li>
                    <p>
                        <span class="schedule-time">22.00</span>
                        Завершение вечера
                    </p>
                </li>
            </ul>
        </div>

        <div class="white-shadow"></div>
    </section>
</template>

<style scoped>
.schedule-section {
    background-image: url('img/section-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.section-divider {
    margin-bottom: var(--range-m);
}

.schedule-time {
    font-weight: bold;
}

.schedule-list-arrow-down {
    margin-top: var(--range-xs);
    display: block;
    background-image: url(img/arrow.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 60px;
}
</style>
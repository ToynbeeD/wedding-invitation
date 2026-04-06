<script setup></script>

<template>
    <section class="section wish-list-section">
        <div class="container">
            <SectionHeader>ПОЖЕЛАНИЯ</SectionHeader>
            <HeartDivider class="section-divider" />
            <p>
                Мы очень ценим ваши заботу и внимание, а самым удобным и желанным подарком для нас
                станет конверт с вкладом в наше счастливое будущее.
            </p>
            <div class="text-divider"></div>
            <p>
                Небольшая просьба: не дарите, пожалуйста, цветы — нам некуда будет их поставить.
            </p>
        </div>

        <div class="white-shadow"></div>
    </section>
</template>

<style scoped>
.wish-list-section {
    background-image: url('img/wish-list-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.section-divider {
    margin-bottom: var(--range-m);
}

.text-divider {
    width: 150px;
    border-top: 1px solid var(--primary-color);
    height: 1px;
    margin: var(--range-l) 0;
}
</style>
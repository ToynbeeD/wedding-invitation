<script setup></script>

<template>
    <section class="section form-section">
        <div class="container">
            <SectionHeader>АНКЕТА ГОСТЯ</SectionHeader>
            <HeartDivider class="section-divider" />

            <p class="form-description">
                Подтвердите, пожалуйста, свое присутствие на празднике до 08.05.2026
            </p>

            <ContactForm />
        </div>

        <div class="white-shadow"></div>
    </section>
</template>

<style scoped>
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
<script setup>
const FINAL_FORM_DATE = new Date('2026-05-12T00:00:00');
const date = new Date();
</script>

<template>
    <main class="main">
        <HeroSection class="page-section" />
        <DescriptionSection class="page-section" />
        <MapSection class="page-section" />
        <ScheduleSection class="page-section" />
        <DressCodeSection class="page-section" />
        <WishListSection class="page-section" />
        <CountdownSection class="page-section" />
        <FormSection v-if="date < FINAL_FORM_DATE" class="page-section" />
    </main>

    <Footer />
</template>

<style scoped>
.page-section {
    margin-bottom: var(--range-xl);
}
</style>
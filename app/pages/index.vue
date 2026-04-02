<script setup></script>

<template>
    <main class="main">
        <HeroSection class="page-section" />
        <DescriptionSection class="page-section" />
        <MapSection class="page-section" />
        <ScheduleSection class="page-section" />
        <DressCodeSection class="page-section" />
        <WishListSection class="page-section" />
        <CountdownSection class="page-section" />
        <FormSection class="page-section" />
    </main>

    <Footer />
</template>

<style scoped>
.page-section {
    margin-bottom: var(--range-xl);
}
</style>
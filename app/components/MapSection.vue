<script setup></script>

<template>
    <section class="section map-section">
        <div class="container map-container">
            <SectionHeader>КАК ДОБРАТЬСЯ</SectionHeader>
            <HeartDivider class="section-divider" />
            <p>Надеемся, что вы легко найдете место и порадуете нас своим присутствием!</p>
        </div>

        <div class="map-wrapper">
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad297e2af2d9be4f2e94f070eca051bf32f63722c928175c9331d7e57c6a99333&amp;source=constructor"
                width="100%"
                height="300"
                frameborder="0">
            </iframe>
        </div>
    </section>
</template>

<style scoped>
.map-container {
    margin-bottom: var(--range-m);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.section-divider {
    margin-bottom: var(--range-m);
}

.map-wrapper {
    width: 100%;
}
</style>
<script setup>
const PRESENCE_OPTIONS = [
    {
        title: 'С удовольствием приду',
        value: '+',
    },
    {
        title: 'К сожалению, не смогу',
        value: '-',
    },
    {
        title: 'Пока не уверен',
        value: '?',
    },
]

const DRINKS_OPTIONS = [
    {
        title: 'Шампанское',
        value: 'shampagne',
    },
    {
        title: 'Вино (белое)',
        value: 'vine-white',
    },
    {
        title: 'Вино (красное)',
        value: 'vine-red',
    },
    {
        title: 'Водка',
        value: 'vodka',
    },
    {
        title: 'Виски',
        value: 'whiskey',
    },
    {
        title: 'Ром',
        value: 'rom',
    },
]

const formData = reactive({
    name: '',
    presence: '',
    alcohol: '',
})

const submited = ref(false)

const updatePresence = (event) => {
    const value = event.target.value;
    if (!value) return;
    formData.presence = value;
}

const updateAlcohol = (event) => {
    const value = event.target.value;
    if (!value) return;
    formData.alcohol = value;
}

const onSubmit = () => {
    submited.value = true;
    console.log(formData)
}
</script>

<template>
    <div v-if="submited" class="success-submit">
        Спасибо, что заполнили форму!
    </div>

    <form v-else class="contact-form" @submit.prevent="onSubmit">
        <div class="form-element">
            <span class="field-title">Ваше имя, фамилия</span>
            <input v-model="formData.name" class="input-text" type="text" name="bio" max="50" required="true">
        </div>

        <div class="form-element">
            <span class="field-title">Присутствие</span>
            <label v-for="option in PRESENCE_OPTIONS" :key="option.value" class="radio-option">
                <input
                    class="radio-input"
                    type="radio"
                    name="presence"
                    :value="option.value" 
                    :checked="formData.presence === option.value"
                    @input="updatePresence"
                />
                <span class="radio-label">{{ option.title }}</span>
            </label>
        </div>

        <div class="form-element">
            <span class="field-title">Предпочтения напитков</span>
            <label v-for="option in DRINKS_OPTIONS" :key="option.value" class="radio-option">
                <input
                    class="radio-input"
                    type="radio"
                    name="alcohol" 
                    :value="option.value" 
                    :checked="formData.alcohol === option.value"
                    @input="updateAlcohol"
                />
                <span class="radio-label">{{ option.title }}</span>
            </label>
        </div>

        <AppButton>Отправить</AppButton>
    </form>
</template>

<style scoped>
.success-submit {
    padding: var(--range-m);
    background-color: #e0ffc7;
    border: 1px solid #b4d39b;
    font: var(--font-xs);
    font-weight: bold;
    width: 100%;
}

.contact-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    gap: var(--range-l);
}

.form-element {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.field-title {
    font: var(--font-m);
    margin-bottom: var(--range-s);
}

.input-text {
    height: 43px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #00000040;
    padding: 0 var(--range-xs);
    font: var(--font-m);
    color: var(--primary-color);
}

.radio-option {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: var(--range-xs);
}

.radio-option:not(:last-of-type) {
    margin-bottom: var(--range-xs);
}

.radio-input {
    width: 16px;
    height: 16px;
}

.radio-label {
    font: var(--font-s);
}
</style>
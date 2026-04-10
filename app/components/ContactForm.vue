<script setup> 
const PRESENCE_YES_VALUE = 'ДА';
const ALCOHOL_CUSTOM_VALUE = 'Другое';
const PRESENCE_OPTIONS = [
    {
        title: 'С удовольствием приду',
        value: PRESENCE_YES_VALUE,
    },
    {
        title: 'К сожалению, не смогу',
        value: 'НЕТ',
    },
]

const DRINKS_OPTIONS = [
    {
        title: 'Вино (белое)',
        value: 'Вино (белое)',
    },
    {
        title: 'Вино (красное)',
        value: 'Вино (красное)',
    },
    {
        title: 'Водка',
        value: 'Водка',
    },
    {
        title: 'Виски',
        value: 'Виски',
    },
    {
        title: 'Не пью алкоголь',
        value: 'НЕ ПЬЮ',
    },
    {
        title: 'Свой вариант',
        value: ALCOHOL_CUSTOM_VALUE,
    },
]

const emit = defineEmits(['success']);

const formData = reactive({
    name: '',
    presence: '',
    alcohol: '',
    customAlcohol: '',
})

const isLoading = ref(false);
const submited = ref(false);
const error = ref(false);

const willGuestComeTo = computed(() => formData.presence === PRESENCE_YES_VALUE);
const isAlcoholCustom = computed(() => formData.alcohol === ALCOHOL_CUSTOM_VALUE);

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

const sendAlertOnTelegram = async () => {
    const config = useRuntimeConfig();
    const tgToken = config.public.tgToken;
    const chatID = config.public.tgChatId;
    const willComeTo = willGuestComeTo.value ? 'будет' : 'не будет';
    const message = `Гость заполнил форму. ${formData.name} ${willComeTo} на свадьбе`;

    await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatID,
            text: message,
        }),
    })
}

const sendForm = async () => {
    const config = useRuntimeConfig();
    const scriptUrl = config.public.googleScriptUrl;
    const key = config.public.googleKey;

    const name = formData.name;
    const presence = formData.presence;
    const alcohol = willGuestComeTo.value ? formData.alcohol : '-';
    const customAlcohol = isAlcoholCustom.value ? formData.customAlcohol : '-';

    await fetch(scriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            key,
            name,
            presence,
            alcohol,
            date: new Date().toLocaleString('ru'),
            customAlcohol,
        }),
        mode: 'no-cors'
    });
}

const onSubmit = async () => {
    isLoading.value = true;    

    try {
        await Promise.all([sendForm(), sendAlertOnTelegram()]);
        submited.value = true;
        willGuestComeTo.value && emit('success');
    } catch (err) {
        error.value = true;
    } finally {
        isLoading.value = false;
    }
};
</script>

<template>
    <div v-if="submited" class="success-submit">
        <span>
            Спасибо, что заполнили форму!
        </span>
        <span v-show="willGuestComeTo">
            С нетерпением ждем встречи с&nbsp;вами на&nbsp;нашем&nbsp;празднике!
        </span>
        <span v-show="!willGuestComeTo">
            Очень жаль, что вы не будете присутствовать. Если&nbsp;ваши&nbsp;планы&nbsp;изменятся - смело пишите нам!
        </span>
    </div>

    <div v-else-if="error" class="error-submit">
        Произошла ошибка при отправке формы.
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
                    :required="true"
                    :value="option.value" 
                    :checked="formData.presence === option.value"
                    @input="updatePresence"
                />
                <span class="radio-label">{{ option.title }}</span>
            </label>
        </div>

        <div v-show="willGuestComeTo" class="form-element">
            <span class="field-title">Предпочтения напитков</span>
            <label v-for="option in DRINKS_OPTIONS" :key="option.value" class="radio-option">
                <input
                    class="radio-input"
                    type="radio"
                    name="alcohol" 
                    :required="formData.presence === 'ДА'"
                    :value="option.value" 
                    :checked="formData.alcohol === option.value"
                    @input="updateAlcohol"
                />
                <span class="radio-label">{{ option.title }}</span>
            </label>
            <input 
                v-if="isAlcoholCustom" 
                v-model="formData.customAlcohol" 
                class="input-text alcohol-input" type="text" 
                placeholder="Напишите свой вариант"
                name="alcohol-custom" 
                max="50" 
                :required="isAlcoholCustom"
            >
        </div>

        <AppButton :is-loading="isLoading">Отправить</AppButton>
    </form>
</template>

<style scoped>
.success-submit {
    padding: var(--range-m);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--range-s);
    background-color: #e0ffc7;
    border: 1px solid #b4d39b;
    font: var(--font-xs);
    font-weight: bold;
    width: 100%;
}

.error-submit {
    padding: var(--range-m);
    background-color: #ff9a9a;
    border: 1px solid #ff6262;
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

.alcohol-input {
    margin-top: var(--range-xs);
}
</style>
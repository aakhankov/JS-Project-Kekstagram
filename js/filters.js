const uploadForm = document.querySelector('.img-upload__form'); // Форма загрузки и редактирования изображений
const uploadPreview = uploadForm.querySelector('.img-upload__preview > img') // Превью загружаемого изображения

const sliderElement = uploadForm.querySelector('.effect-level__slider'); // Поле для отрисовки слайдера
const valueElement = uploadForm.querySelector('.effect-level__value'); // Поле значения (насыщенность)
const effectValueHidden = uploadForm.querySelector('.effects__value--hidden'); //Скрытое поле значения (фильтры)

//Эффект оригинал по умолчанию
uploadPreview.classList.add('effects__preview--none');

//Слайдер скрыт по умолчанию для эффекта ориганал
sliderElement.classList.add('hidden');

//слайдер интенсивности эффектов 
noUiSlider.create(sliderElement, {
    range: {
        min: 0,
        max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
    format: {
        to: function (value) {
            if (Number.isInteger(value)) {
                return value.toFixed(0);
            }
            return value.toFixed(1);
        },
        from: function (value) {
            return parseFloat(value);
        },
    },
});

//функция смены эффектов 
const onFilterChange = (evt) => {
    if (evt.target.matches('input[type="radio"]')) {
        uploadPreview.className = '';
        uploadPreview.classList.add(`effects__preview--${evt.target.value}`);
        effectValueHidden.value = `${evt.target.value}`;

        //Параметры слайдера при изменении эффектов
        if (evt.target.value === 'none') {
            sliderElement.classList.add('hidden');
            uploadPreview.style.filter = 'none';
            valueElement.value = 'none';

        } else if (evt.target.value === 'chrome') { //эффект хром
            sliderElement.classList.remove('hidden');
            sliderElement.noUiSlider.updateOptions({
                range: {
                    min: 0,
                    max: 1,
                },
                start: 1,
                step: 0.1,
            });

            sliderElement.noUiSlider.on('update', (values, handle) => {
                uploadPreview.style.filter = `grayscale(${values[handle]})`;
                valueElement.value = values[handle];
            });
        } else if (evt.target.value === 'sepia') { //эффект сепиа
            sliderElement.classList.remove('hidden');
            sliderElement.noUiSlider.updateOptions({
                range: {
                    min: 0,
                    max: 1,
                },
                start: 1,
                step: 0.1,
            });

            sliderElement.noUiSlider.on('update', (values, handle) => {
                uploadPreview.style.filter = `sepia(${values[handle]})`;
                valueElement.value = values[handle];
            });
        } else if (evt.target.value === 'marvin') { //эффект марвин
            sliderElement.classList.remove('hidden');
            sliderElement.noUiSlider.updateOptions({
                range: {
                    min: 0,
                    max: 100,
                },
                start: 100,
                step: 1,
            });

            sliderElement.noUiSlider.on('update', (values, handle) => {
                uploadPreview.style.filter = `invert(${values[handle]}%)`;
                valueElement.value = values[handle];
            });
        } else if (evt.target.value === 'phobos') { //эффект фобос
            sliderElement.classList.remove('hidden');
            sliderElement.noUiSlider.updateOptions({
                range: {
                    min: 0,
                    max: 3,
                },
                start: 3,
                step: 0.1,
            });

            sliderElement.noUiSlider.on('update', (values, handle) => {
                uploadPreview.style.filter = `blur(${values[handle]}px)`;
                valueElement.value = values[handle];
            });
        } else if (evt.target.value === 'heat') { //эффект хит
            sliderElement.classList.remove('hidden');
            sliderElement.noUiSlider.updateOptions({
                range: {
                    min: 1,
                    max: 3,
                },
                start: 3,
                step: 0.1,
            });

            sliderElement.noUiSlider.on('update', (values, handle) => {
                uploadPreview.style.filter = `brightness(${values[handle]})`;
                valueElement.value = values[handle];
            });
        }
    }
}

export {onFilterChange}
import './../nouislider/nouislider.js';
import './scale.js';
import './filters.js';
import { isEscapeKey, showAlert } from './util.js';
import { uploadForm, uploadFile, uploadPopup, uploadOpen, hashtagField, descriptionField } from './form-validity.js';
import { scaleBigger, scaleControlBigger, scaleControlSmaller, scaleControlValue, scaleSmaller, scaleValueHidden } from './scale.js';
import { onFilterChange, sliderElement, uploadPreview, valueElement } from './filters.js';
import { sentData } from './api.js';
import { FILE_TYPES } from './data.js';

const uploadCancel = uploadForm.querySelector('#upload-cancel'); // «Крестик» для закрытия всплывающего окна

// Обработчик закрытия окна (формы)
const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    uploadClose();
  }
};

// Закрытие модального окна
const uploadClose = () => {
  uploadPopup.classList.add('hidden');
  document.body.classList.remove('modal-open');

  //значение полей формы
  uploadFile.value = '';
  hashtagField.value = '';
  descriptionField.value = '';

  //фильтры 
  sliderElement.classList.add('hidden');
  uploadPreview.style.filter = 'none';
  valueElement.value = 'none';

  //размеры
  scaleValueHidden.value = 100;
  uploadPreview.style.transform = 'scale(1)';
  scaleControlValue.value = '100%';

  //обработчики
  scaleControlSmaller.removeEventListener('click', scaleSmaller);
  scaleControlBigger.removeEventListener('click', scaleBigger);
  uploadForm.removeEventListener('change', onFilterChange);
  document.removeEventListener('keydown', onPopupEscKeydown);
};

// Событие показа модального окна
//uploadFile.addEventListener('change', uploadOpen);
uploadFile.addEventListener('change', () => {
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((item) => fileName.endsWith(item));

  if (matches) {
    uploadPreview.src = URL.createObjectURL(file);
  }
  uploadOpen();
});


// Событие закрытия модального окна при нажатии на «крестик»
uploadCancel.addEventListener('click', () => {
  uploadClose();
});

//событие при нажатии на кнопку публикации
const setUserFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sentData(
      () => onSuccess(),
      () => showAlert('Не удалось отправить форму. Попробуйте еще раз'),
      new FormData(evt.target),
    );
  });
};

export { onPopupEscKeydown, setUserFormSubmit, uploadClose };
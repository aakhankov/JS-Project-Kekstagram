import { pictures } from './pictures.js';
import { onPopupEscKeydown } from './gallery.js';
import { SHOWN_COMMENTS_MAX } from './data.js';

const bigPicture = document.querySelector('.big-picture'); // Блок полноразмерного изображения

const bigPictureImage = bigPicture.querySelector('.big-picture__img > img'); // Блок полноразмерного изображения
const bigPictureLikesCount = bigPicture.querySelector('.likes-count'); // Количество лайков полноразмерного изображения
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count'); // Количество комментариев полноразмерного изображения
const bigPictureCommentsCounter = bigPicture.querySelector('.social__comment-count'); // Счётчик комментариев
const bigPictureCommentsLoader = bigPicture.querySelector('.comments-loader'); // Кнопка загрузки новых комментариев
const bigPictureCommentsList = bigPicture.querySelector('.social__comments'); // Список комментариев полноразмерного изображения
const bigPictureCommentsTemplate = bigPictureCommentsList.querySelector('.social__comment'); // Шаблон комментария полноразмерного изображения
const bigPictureCommentsFragment = document.createDocumentFragment(); // Фрагмент (комментариев)
const bigPictureDescription = bigPicture.querySelector('.social__caption'); // Описание полноразмерного изображения

// Функция открытия модального окна
const openBigPicture = (evt) => {
    document.body.classList.add('modal-open'); // Отключение прокрутки контейнера с фотографиями
    bigPicture.classList.remove('hidden'); // Открытие фотографии в полном размере
    // bigPictureCommentsCounter.classList.add('hidden'); //Счётчик комментариев
    // bigPictureCommentsLoader.classList.add('hidden'); //Загрузка новых комментариев

    let pictureSrc; // Переменная ссылки на изображение

    if (evt.target.matches('img')) {
        pictureSrc = bigPictureImage.src = evt.target.src;// Значение переменной при клике
    } else if (evt.target.matches('a')) {
        pictureSrc = bigPictureImage.src = evt.target.querySelector('.picture__img').src;// Значение переменной при нажатии на Enter
    }
    
    // Поиск текущей картинки
    const pictureCurrent = pictures.find((picture) => pictureSrc.indexOf(picture.url) !== -1);

    bigPictureLikesCount.textContent = pictureCurrent.likes; // Лайки текущего изображения
    bigPictureCommentsCount.textContent = pictureCurrent.comments.length; // Кол-во комментариев текущего изображения
    bigPictureDescription.textContent = pictureCurrent.description; // Описание текущего изображения

    const pictureCurrentComments = pictureCurrent.comments; // Комментарии к текущему изображению
    //создаем фрагмент с комментарием
    pictureCurrentComments.forEach(({ avatar, name, message }) => {
        bigPictureCommentsList.textContent = ''; //очистка дефолтных комментариев
        const pictureComments = bigPictureCommentsTemplate.cloneNode(true);
        pictureComments.querySelector('.social__picture').src = avatar;
        pictureComments.querySelector('.social__picture').alt = name;
        pictureComments.querySelector('.social__text').textContent = message;
        bigPictureCommentsFragment.appendChild(pictureComments);
    });
    bigPictureCommentsList.appendChild(bigPictureCommentsFragment); //добавляем готовый фрагмент комментария в блок на странице

    const bigPictureCommentsItems = bigPictureCommentsList.querySelectorAll('.social__comment'); // Все сгенерированные комментарии

    // Сразу после открытия изображения отображается не более SHOWN_COMMENTS_MAX комментариев
    if(bigPictureCommentsItems.length > SHOWN_COMMENTS_MAX) {
        for(let i = pictureCurrent.comments.length - 1; i >= SHOWN_COMMENTS_MAX; i--) {
            bigPictureCommentsItems[i].classList.add('hidden');
        }
    }

    let shownComments = SHOWN_COMMENTS_MAX; // Количество отображённых комментариев

   // Обработчик кнопки «загрузить ещё»
  const test = () => {
    for (let i = 1; i <= SHOWN_COMMENTS_MAX; i++) {
      if (shownComments < pictureCurrent.comments.length) {
        bigPictureCommentsItems[shownComments].classList.remove('hidden');
        shownComments = shownComments + 1;
        bigPictureCommentsCounter.textContent = `${shownComments} из ${bigPictureCommentsCount.textContent} комментариев`;
      } else {
        bigPictureCommentsLoader.classList.add('hidden');
        shownComments = SHOWN_COMMENTS_MAX;
        break;
      }
    }
  };

  // Обновление обработчика кнопки «загрузить ещё»
  if (shownComments >= pictureCurrent.comments.length) {
    bigPictureCommentsLoader.classList.add('hidden');
    shownComments = pictureCurrent.comments.length;
    bigPictureCommentsCounter.textContent = `${shownComments} из ${bigPictureCommentsCount.textContent} комментариев`;
  } else if (!bigPictureCommentsLoader.classList.contains('hidden')) {
    bigPictureCommentsLoader.addEventListener('click', test);
    bigPictureCommentsCounter.textContent = `${shownComments} из ${bigPictureCommentsCount.textContent} комментариев`;
  } else {
    bigPictureCommentsLoader.removeEventListener('click', test);
  }

  document.addEventListener('keydown', onPopupEscKeydown); // Закрытие модального окна при нажатии на ESC
};

export {bigPicture, openBigPicture, bigPictureCommentsLoader};




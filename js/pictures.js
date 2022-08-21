import { comparePicturesIds, comparePicturesComments, sortInput } from "./sort.js";

const picturesBlock = document.querySelector('.pictures'); //блок картинок

//фрагмент содержимиого шаблона картинок
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture'); // Фрагмент содержимого шаблона картинок

//отрисовка фотографий
const renderPictures = (pictures) => {
    const picturesFragment = document.createDocumentFragment();

    pictures.slice();

    if (sortInput.value === 'default'){
        pictures.sort(comparePicturesIds);
    } else if (sortInput.value ==='random'){
        pictures.sort(() => Math.random() - 0.5);  
    } else if (sortInput.value === 'discussed'){
        pictures.sort(comparePicturesComments);
    }

    pictures.forEach(({ url, comments, likes }) => {
        const picturesElement = picturesTemplate.cloneNode(true);
        picturesElement.querySelector('.picture__img').src = url;
        picturesElement.querySelector('.picture__comments').textContent = comments.length;
        picturesElement.querySelector('.picture__likes').textContent = likes;
        picturesFragment.appendChild(picturesElement);
    });

    picturesBlock.querySelectorAll('.picture').forEach((pic) => pic.remove());
    picturesBlock.appendChild(picturesFragment);
};

export{picturesBlock, renderPictures};
const sortBlock = document.querySelector('.img-filters'); //блок сортировки 

const sortDefault = sortBlock.querySelector('#filter-default'); //кнопка сортировки "по умолчанию"
const sortRandom = sortBlock.querySelector('#filter-random'); //кнопка сортировки "случайные"
const sortDiscussed = sortBlock.querySelector('#filter-discussed'); //кнопка сортировки "обсуждаемы"

const sortInput = sortBlock.querySelector('#sort-input'); //скрытый инпут

//по умолчанию - фотографии в изначальном порядке с сервера
const sortDefaultClick = (cb) => {
    sortDefault.addEventListener('click', () => {
        sortDefault.classList.add('img-filters__button--active');
        sortRandom.classList.remove('img-filters__button--active');
        sortDiscussed.classList.remove('img-filters__button--active');

        sortInput.value = 'default';
        cb();
    });
};

//Случайные - 10 случайцных не повторяющихся фото
const sortRandomClick = (cb) => {
    sortRandom.addEventListener('click', () => {
        sortDefault.classList.remove('img-filters__button--active');
        sortRandom.classList.add('img-filters__button--active');
        sortDiscussed.classList.remove('img-filters__button--active');

        sortInput.value = 'random';
        cb();
    });
};

//обсуждаемые - фотографии, отсортированние в порядке убывания количества комментариев
const sortDiscussedClick = (cb) => {
    sortDiscussed.addEventListener('click', () => {
        sortDefault.classList.remove('img-filters__button--active');
        sortRandom.classList.remove('img-filters__button--active');
        sortDiscussed.classList.add('img-filters__button--active');

        sortInput.value = 'discussed';
        cb();
    });
};

// функция сортировки изображений по id (по умолчанию)
const comparePicturesIds = (pictureA, pictureB) => {
    const rankIdA = pictureA.id;
    const rankIdB = pictureB.id;

    return rankIdA - rankIdB;
};

// функция сортировки изображений по комментариям (обсуждаемые)
const comparePicturesComments = (pictureA, pictureB) => {
    const rankCommentsA = pictureA.comments.length; 
    const rankCommentsB = pictureB.comments.length; 
    
    return rankCommentsB - rankCommentsA; 
}; 

export {sortBlock, sortInput, comparePicturesIds, comparePicturesComments, sortDefaultClick, sortRandomClick, sortDiscussedClick};
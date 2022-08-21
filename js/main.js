import './api.js';
import './gallery.js'; 
import './form.js';
import './form-validity.js';
import './sort.js';
import { getData } from './api.js';

import { renderPictures } from './pictures.js';
import { addPicturesClicEvent } from './gallery.js';
import { sortDefaultClick, sortDiscussedClick, sortRandomClick } from './sort.js';
import { setUserFormSubmit, uploadClose } from './form.js';
import { debounce } from './utils/debounce.js';

const RERENDER_DELAY = 500; //задержка прорисовки изображений

getData((pictures) => {
    renderPictures(pictures);
    addPicturesClicEvent(pictures);

    sortDefaultClick(debounce(
        () => renderPictures(pictures),
        RERENDER_DELAY,
    ));

    sortRandomClick(debounce(
        () => renderPictures(pictures),
        RERENDER_DELAY,
    ));

    sortDiscussedClick(debounce(
        () => renderPictures(pictures),
        RERENDER_DELAY,
    ));
});

setUserFormSubmit(uploadClose);

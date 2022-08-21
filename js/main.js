import './api.js';
import './gallery.js'; 
import './form.js';
import './form-validity.js';
import { getData } from './api.js';

import { renderPictures } from './pictures.js';
import { addPicturesClicEvent } from './gallery.js';
import { setUserFormSubmit, uploadClose } from './form.js';

getData((pictures) => {
    renderPictures(pictures);
    addPicturesClicEvent(pictures);
});

setUserFormSubmit(uploadClose);

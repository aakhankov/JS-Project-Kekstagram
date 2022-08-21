import { showMessage } from './util.js';
import { sortBlock } from './sort.js';


const getData = (onSuccess) => {
    fetch('https://24.javascript.pages.academy/kekstagram/data')
        .then((response) => response.json())
        .then((pictures) => {
            onSuccess(pictures);
            sortBlock.classList.remove('img-filters--inactive');
        });
};

const sentData = (onSuccess, onFail, body) => {
    fetch(
        'https://24.javascript.pages.academy/kekstagram',
        {
            method: 'POST',
            body,
        },
    )
        .then((response) => {
            if (response.ok) {
                onSuccess();
                showMessage('Форма успешно отправлена!');
            } else {
                onFail('Не удалось отправить форму. Попробуйте еще раз');
            }
        })
        .catch(() => {
            onFail('Не удалось отправить форму. Попробуйте еще раз');
        });
};

export { getData, sentData };


// Массив сообщений комментария
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Массив первой части имён пользователей
const NAMES = [
  'Кекс',
  'Рудольф',
  'Снежок',
  'Семён',
  'Егор',
  'Чечевица',
  'Куркума',
];

// Массив знаков между частями имён пользователей
const SPACES = [
  ' ',
  '_',
  '-',
  '',
];

// Массив второй части имён пользователей
const SURNAMES = [
  'Бобр',
  '1337',
  'Мегапихарь',
  'Программист',
  'JS',
  'Гугленко',
];

// Массив описаний к фотографиям
const DESCRIPTIONS = [
  'Люблю фотографировать всё вокруг и получать от этого одно только удовольствие',
  'Думаю, что фотография вышла забавной',
  'Животные - самые фотогеничные существа на земле',
  'Фотографии под солнцем - самые яркие, только посмотри',
  'Прекрасное время года, чтобы любоваться такими фотографиями',
];

const COMMENTS_COUNT = 4; // Количество комментариев
const OBJECTS_COUNT = 25; // Количество генерируемых объектов
const TOTAL_COMMENTS_COUNT = COMMENTS_COUNT * OBJECTS_COUNT; // Количество всех комментариев на сайте

const DESCRIPTION_MAX_LENGTH = 140; // Максимальная длина описания (комментария)
const HASHTAG_MIN_LENGTH = 2; // Минимальная длина одного хэш-тега
const HASHTAG_MAX_LENGTH = 20; // Максимальная длина одного хэш-тега
const HASHTAG_MAX_QUANTITY = 5; // Максимальное количество хэш-тегов в одном посте

export {
  MESSAGES,
  NAMES,
  SPACES,
  SURNAMES,
  DESCRIPTIONS,
  COMMENTS_COUNT,
  OBJECTS_COUNT,
  TOTAL_COMMENTS_COUNT,
  DESCRIPTION_MAX_LENGTH,
  HASHTAG_MIN_LENGTH,
  HASHTAG_MAX_LENGTH,
  HASHTAG_MAX_QUANTITY
};
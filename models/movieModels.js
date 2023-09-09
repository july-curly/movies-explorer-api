const mongoose = require('mongoose');
const validator = require('validator');
const urlRegexPattern = require('../utils/constants');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'Заполните это поле.'],
  },
  director: {
    type: String,
    required: [true, 'Заполните это поле.'],
  },
  duration: {
    type: Number,
    required: [true, 'Заполните это поле.'],
  },
  year: {
    type: String,
    required: [true, 'Заполните это поле.'],
  },
  description: {
    type: String,
    required: [true, 'Заполните это поле.'],
  },
  image: {
    type: String,
    required: [true, 'Заполните это поле.'],
    validate: {
      validator(url) {
        return urlRegexPattern.test(url);
      },
      message: 'Введите URL',
    },
  },
  trailerLink: {
    type: String,
    required: [true, 'Заполните это поле.'],
    validate: {
      validator(url) {
        return urlRegexPattern.test(url);
      },
      message: 'Введите URL',
    },
  },
  thumbnail: {
    type: String,
    required: [true, 'Заполните это поле.'],
    validate: {
      validator(url) {
        return urlRegexPattern.test(url);
      },
      message: 'Введите URL',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: [true, 'Заполните это поле.'],
    validate: {
      validator(value) {
        return validator.isAlpha(value, 'ru-RU');
      },
      message: 'Название должно содержать только буквы на русском языке.',
    },
  },
  nameEN: {
    type: String,
    required: [true, 'Заполните это поле.'],
    validate: {
      validator(value) {
        return validator.isAlpha(value, 'en-US');
      },
      message: 'Название должно содержать только буквы на английском языке.',
    },
  },
}, { versionKey: false });

module.exports = mongoose.model('movie', movieSchema);

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
//
import * as dictionaries from './dictionaries';

const resources = {
  en: {
    translation: dictionaries.en,
  },

  ru: {
    translation: dictionaries.ru,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

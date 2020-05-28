import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import constants from '../configs/constants';
import resources from './translations';

const savedLanguage = localStorage.getItem('lang');
i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage || constants.defaultLanguage,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

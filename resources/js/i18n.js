// resources/js/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
 
// Import your translation files
import enTranslation from './Pages/locales/en.json';
import frTranslation from './Pages/locales/fr.json';
// Add more languages as needed
 
const resources = {
  en: {
    translation: enTranslation
  },
  fr: {
    translation: frTranslation
  }
  // Add more languages as needed
};
 
i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV !== 'production',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false, // prevents suspense if you don't want it
    }
  });
 
export default i18n;
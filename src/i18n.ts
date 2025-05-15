// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // 👈 this detects from localStorage automatically
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: require('./locales/en.json') },
      de: { translation: require('./locales/de.json') },
      fr: { translation: require('./locales/fr.json') },
      it: { translation: require('./locales/it.json') },
    },
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'], // saves selected lang
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

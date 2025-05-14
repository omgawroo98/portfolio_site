// hooks/useLanguage.ts
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LANGUAGE_STORAGE_KEY = 'lang';

const useLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState(i18n.language);

  useEffect(() => {
    const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
      setLanguageState(savedLang);
    }
  }, [i18n]);

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    setLanguageState(lang);
  };

  useEffect(() => {
    console.log('language', language)
  }, [language])

  return {
    language,
    setLanguage,
  };
};

export default useLanguage;

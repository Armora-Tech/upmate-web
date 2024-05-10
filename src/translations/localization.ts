import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "../translations/en.json";
import idnTranslation from "../translations/idn.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  idn: {
    translation: idnTranslation,
  },
};

const i18nConfig = {
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: resources,
};

i18n.use(LanguageDetector).use(initReactI18next).init(i18nConfig);

export default i18n;

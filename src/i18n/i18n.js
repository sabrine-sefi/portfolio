import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationFR from "./fr.json";
import translationEN from "./en.json";

const resources = {
  fr: {
    translation: translationFR
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr", // langue par défaut
    fallbackLng: "en", // si une clé est manquante
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

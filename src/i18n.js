import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from './locales/en/translationEN.json'
import translationUA from './locales/ua/translationUA.json'

const resources = {
    en: {
        translation: translationEN
    },
    ua: {
        translation: translationUA
    }
};

let baseLg = localStorage.getItem("lg");
if (!baseLg) {
    baseLg = "en"
}

i18n.use(initReactI18next).init({
    resources,
    lng: baseLg,
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
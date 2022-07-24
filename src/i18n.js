import i18n, { init } from "i18next";
import Backend from "i18next-http-backend" 
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";


i18n.use(LanguageDetector)
  .use(Backend)
    .use(initReactI18next)
    .init({
      backend: {
        // translation file path
        loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
      },
      ns: ["common", "home", "token"],
        fallbackLng:'en',
        debug:true,
       
        interpolation: {
            escapeValue: false ,// react already safes from xss
            formatSeparator:","
          },
          react: {
            wait: false,
            withRef: false,
            bindI18n: 'languageChanged loaded',
            bindStore: 'added removed',
            nsMode: 'default'
          }
         
    })
export default i18n

    // i18n.changeLanguage("en");

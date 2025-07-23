import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { resources } from './locales';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languagedetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: import.meta.env.DEV,

    fallbackLng: 'en',

    // Default namespace (useful when you start organizing translations)
    defaultNS: 'common',

    // Language detection configuration
    detection: {
      // Order of language detection methods
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

      // Keys for localStorage detection
      lookupLocalStorage: 'i18nextLng',

      // Cache user language on localStorage
      caches: ['localStorage'],

      // Only detect languages that we actually support
      // Note: checkSupportedLngs is not a valid DetectorOptions property
      // This functionality is handled by the main supportedLngs option
    },

    // Supported languages (whitelist)
    supportedLngs: Object.keys(resources),

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    // Development helpers
    returnEmptyString: false, // Show keys when translations are missing

    // Performance optimization
    load: 'languageOnly', // Load only language code, not region (en instead of en-US)

    // React specific options
    react: {
      useSuspense: true, // Wait for translations to be loaded before rendering
    },

    resources,
  });

export default i18n;

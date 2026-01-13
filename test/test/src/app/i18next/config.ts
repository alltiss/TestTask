import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import I18nextHttpBackend from 'i18next-http-backend';
import * as locales from './locales'

export const supportedLngs = ['ru', 'en'] as const

export const defaultNS = 'locales';

export const resources = {
  ru: {
    locales: locales.ru,
  },
  en: {
    locales: locales.en,
  },
} as const

void i18n
  .use(I18nextHttpBackend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    defaultNS,
    resources,
    supportedLngs,
    lowerCaseLng: true,
    cleanCode: true,
    load: 'languageOnly',
  });

export { i18n };

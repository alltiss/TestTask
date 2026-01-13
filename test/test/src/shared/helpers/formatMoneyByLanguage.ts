import { supportedLngs } from 'app/ i18next/config'

export type CurrentLanguage = (typeof supportedLngs)[number];

export const formatMoneyByLanguage = (value: number, currentLanguage:CurrentLanguage) => {
  const isRu = currentLanguage === "ru";
  const currency = isRu ? "₽" : "$";
  return isRu ? `${value}${currency}` : `${currency}${value}`;
};

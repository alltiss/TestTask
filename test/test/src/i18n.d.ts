import { defaultNS, resources, supportedLngs } from 'app/i18next/config'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: (typeof resources)[(typeof supportedLngs)[number]]
  }
}

import clsx from 'clsx'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import LanguageIcon from 'shared/assets/language.svg?react'
import TelegramIcon from 'shared/assets/telegram.svg?react'
import VkIcon from 'shared/assets/vk.svg?react'
import WhatsAppIcon from 'shared/assets/whatsapp.svg?react'
import { ROUTES } from 'shared/routing'
import { TextButton } from 'shared/ui/button'
import { Flex } from 'shared/ui/flex/Flex'
import { ExternalIconLink } from 'shared/ui/link'

import styles from './Footer.module.scss'

const footerLinks = [
  { to: ROUTES.favorites, i18nKey: 'favorites' },
  { to: ROUTES.basket, i18nKey: 'cart' },
  { to: ROUTES.contacts, i18nKey: 'contacts' },
] as const

export const Footer = () => {
  const { t } = useTranslation('locales')

  const currentLanguage = i18n.language

  const translateToRus = () => void i18n.changeLanguage('ru')
  const translateToEng = () => void i18n.changeLanguage('en')

  return (
    <div className={styles.wrapper}>
      <h1> QPICK</h1>

      <ul className={styles.links}>
        {footerLinks.map(({ to, i18nKey }) => (
          <li key={to}>
            <Link to={to} className={styles.link}>
              {t(i18nKey)}
            </Link>
          </li>
        ))}
      </ul>

      <Flex dir="column" justify="space-between">
        <div> {t('serviceTerms')}</div>
        <Flex gap={15} align={'center'}>
          <LanguageIcon className={styles.languageIcon} />
          <TextButton
            title={'Рус'}
            className={clsx(styles.button, currentLanguage === 'ru' && styles.active)}
            onClick={translateToRus}
          />
          <TextButton
            title={'Eng'}
            className={clsx(styles.button, currentLanguage === 'en' && styles.active)}
            onClick={translateToEng}
          />
        </Flex>
      </Flex>

      <Flex gap={15}>
        <ExternalIconLink
          href="https://vk.com/neoflex_ru"
          label="VK"
          Icon={VkIcon}
          iconClassName={styles.vk}
        />
        <ExternalIconLink
          href="https://web.telegram.org/a/"
          label="Telegram"
          Icon={TelegramIcon}
          iconClassName={styles.icon}
        />
        <ExternalIconLink
          href="https://web.whatsapp.com"
          label="WhatsApp"
          Icon={WhatsAppIcon}
          iconClassName={styles.icon}
        />
      </Flex>
    </div>
  )
}

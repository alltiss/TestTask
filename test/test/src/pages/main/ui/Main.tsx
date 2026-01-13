import { useTranslation } from 'react-i18next'
import { CardList } from 'widgets/card/productCard/ui/CardList'

import products from '../../../../server/mockData.json'
import styles from './Main.module.scss'

const Main = () => {
  const { t } = useTranslation('locales')

  const headphones = products.headphones.wiredHeadphones
  const wirelessHeadphones = products.headphones.wirelessHeadphones

  return (
    <div className={styles.wrapper}>
      <CardList title={t('headphones')} productCards={headphones} />
      <CardList title={t('wirelessHeadphones')} productCards={wirelessHeadphones} />
    </div>
  )
}
export default Main

import { useAppSelector } from 'app/store/hooks'
import { cartModel } from 'features/index'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { formatMoneyByLanguage } from 'shared/helpers'
import { ROUTES } from 'shared/routing'
import { Flex } from 'shared/ui/flex'

import styles from './CartTotal.module.scss'

export const CartTotal = () => {
  const { t } = useTranslation('locales')

  const currentLanguage = i18n.language

  const totalAmount = useAppSelector(cartModel.selectors.selectTotalAmount)

  const isEmptyCart = totalAmount === 0
  
  return (
    <div className={styles.wrapper}>
      <Flex justify="space-between" padding="22px 18px 0 22px">
        <span className={styles.total}> {t('total').toUpperCase()}</span>
        <span className={styles.totalPrice}>
          {formatMoneyByLanguage(totalAmount, currentLanguage)}
        </span>
      </Flex>

      <Link to={isEmptyCart ? ROUTES.root : ROUTES.payment} className={styles.link}>
        {isEmptyCart ? t('toShopping') : t('checkout')}
      </Link>
    </div>
  )
}

import React from 'react'
import { useTranslation } from 'react-i18next'
import { Flex } from 'shared/ui/flex'
import { CartItem } from 'widgets/card/cartItemCard'
import { CartTotal } from 'widgets/card/cartTotalCard'

import styles from './Basket.module.scss'

const Basket = () => {
  const { t } = useTranslation('locales')

  return (
    <div className={styles.wrapper}>
      <span className={styles.cart}>{t('cart')}</span>

      <Flex dir={'row'} justify="space-between">
        <CartItem />
        <CartTotal />
      </Flex>
    </div>
  )
}
export default Basket

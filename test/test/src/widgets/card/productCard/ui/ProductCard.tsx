import { useAppDispatch } from 'app/store/hooks'
import { cartModel } from 'features/index'
import i18n from 'i18next'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import InfoIcon from 'shared/assets/info.svg?react'
import StarIcon from 'shared/assets/star.svg?react'
import { formatMoneyByLanguage } from 'shared/helpers'
import { useModal } from 'shared/hooks/useModal'
import { type Product } from 'shared/types'
import { IconButton, TextButton } from 'shared/ui/button'
import { Flex } from 'shared/ui/flex/Flex'
import { CardModal } from 'widgets/card/productCard/ui/cardModal/CardModal'

import styles from './ProductCard.module.scss'

export const ProductCard: FC<Product> = (product) => {
  const dispatch = useAppDispatch()

  const { img, title, rating, price, discountPrice } = product

  const { t } = useTranslation('locales')
  const currentLanguage = i18n.language

  const { isOpen, open, close } = useModal()

  const onBuy = () => {
    dispatch(cartModel.actions.addItem(product))
  }

  return (
    <div className={styles.wrapper}>
      <img src={img} alt={title} className={styles.img} />

      <Flex dir="column" gap={25} margin="30px 0">
        <Flex justify="space-between">
          <div className={styles.title}>{title}</div>

          <Flex dir="column" className={styles.priceWrapper}>
            <div className={styles.price}>{formatMoneyByLanguage(price, currentLanguage)}</div>

            {discountPrice && (
              <div className={styles.discount}>
                {formatMoneyByLanguage(discountPrice, currentLanguage)}
              </div>
            )}
          </Flex>
        </Flex>

        <Flex justify="space-between">
          <Flex gap={10}>
            <IconButton
              Icon={StarIcon}
              title="rating"
              classNameButton={styles.icon}
              classNameIcon={styles.icon}
            />
            <div>{rating}</div>
            <IconButton
              Icon={InfoIcon}
              title="info icon"
              classNameButton={styles.icon}
              classNameIcon={styles.icon}
              onClick={open}
            />
          </Flex>

          <TextButton title={t('buy')} onClick={onBuy} className={styles.button} />
        </Flex>
      </Flex>
      <CardModal isOpen={isOpen} close={close} product={product} />
    </div>
  )
}

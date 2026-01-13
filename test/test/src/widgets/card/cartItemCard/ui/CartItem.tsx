import { useAppDispatch, useAppSelector } from 'app/store/hooks'
import { cartModel } from 'features/index'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import DeleteIcon from 'shared/assets/delete.svg?react'
import { formatMoneyByLanguage } from 'shared/helpers'
import { IconButton } from 'shared/ui/button'

import styles from './CartItem.module.scss'

export const CartItem = () => {
  const { t } = useTranslation('locales')
  const dispatch = useAppDispatch()

  const currentLanguage = i18n.language
  const itemsInBasket = useAppSelector(cartModel.selectors.selectItemsInBasket)

  if (!itemsInBasket.length) {
    return <div>{t('emptyCart')}</div>
  }

  return (
    <div>
      {itemsInBasket.map((card) => (
        <div className={styles.cardWrapper} key={card.id}>
          <div className={styles.cardLeft}>
            <div className={styles.cardCount}>
              <img className={styles.cardImg} src={card.img} alt={card.title} />
              <div className={styles.counter}>
                <button
                  className={styles.buttonMinus}
                  aria-label="button to decrease the amount of goods in the cart"
                  onClick={() => dispatch(cartModel.actions.decrementItem(card.id))}
                  disabled={card.quantity <= 1}
                  type="button"
                />

                <h3 className={styles.quantityItem}>{card.quantity}</h3>
                <button
                  className={styles.buttonPlus}
                  aria-label="button to increase the amount of goods in the cart"
                  onClick={() => dispatch(cartModel.actions.incrementItem(card.id))}
                  type="button"
                />
              </div>
            </div>

            <div className={styles.cardDescription}>
              <h4 className={styles.cardTitle}>{card.title}</h4>
              <h6 className={styles.cardPrice}>
                {formatMoneyByLanguage(card.price, currentLanguage)}
              </h6>
            </div>
          </div>

          <div className={styles.cardRight}>
            <IconButton
              Icon={DeleteIcon}
              title="Delete icon"
              classNameButton={styles.deleteIcon}
              classNameIcon={styles.deleteIcon}
              onClick={() => dispatch(cartModel.actions.deleteItem(card.id))}
            />

            <p className={styles.totalPriceItem}>
              {formatMoneyByLanguage(card.price * card.quantity, currentLanguage)}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

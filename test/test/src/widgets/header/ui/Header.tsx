import { useAppSelector } from 'app/store/hooks'
import { cartModel } from 'features/index'
import { Link } from 'react-router-dom'
import BasketIcon from 'shared/assets/basket.svg?react'
import HeartIcon from 'shared/assets/heart.svg?react'
import { ROUTES } from 'shared/routing'
import { RouteIconLink } from 'shared/ui/link'

import styles from './Header.module.scss'

export const Header = () => {
  const totalQuantity = useAppSelector(cartModel.selectors.selectUniqueItemsCount)

  return (
    <div className={styles.wrapper}>
      <Link className={styles.logo} to="/">
        QPICK
      </Link>

      <nav className={styles.nav} aria-label="Header navigation">
        <div className={styles.iconWrapper}>
          <RouteIconLink
            to={'/favorite'}
            Icon={HeartIcon}
            label={'HeartIcon'}
            iconClassName={styles.icon}
          />
          <div className={styles.counter}>0</div>
        </div>

        <div className={styles.iconWrapper}>
          <RouteIconLink
            to={ROUTES.basket}
            Icon={BasketIcon}
            label={'Basket'}
            iconClassName={styles.icon}
          />
          <div className={styles.counter}>{totalQuantity ?? 0}</div>
        </div>
      </nav>
    </div>
  )
}

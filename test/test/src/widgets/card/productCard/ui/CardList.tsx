import { FC } from 'react'
import { type Product } from 'shared/types'

import { ProductCard } from './ProductCard'
import styles from './ProductCard.module.scss'

type CardListProps = {
  title: string
  productCards: Product[]
}

export const CardList: FC<CardListProps> = ({ title, productCards = [] }) => {
  return (
    <div>
      <h2 className={styles.title}>{title} </h2>
      <div className={styles.wrapperCardList}>
        {productCards.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

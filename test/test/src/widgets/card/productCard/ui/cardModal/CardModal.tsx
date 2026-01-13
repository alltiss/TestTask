import { FC } from 'react'
import { type Product } from 'shared/types'
import { Modal } from 'shared/ui/modal'

import styles from './CardModal.module.scss'

type CardModalProps = {
  isOpen: boolean
  close: () => void
  product: Product
}

export const CardModal: FC<CardModalProps> = ({ isOpen, close, product }) => {
  return (
    <Modal isOpen={isOpen} onCancel={close} headerText={product.title}>
      <img src={product.img} alt={product.title} />
      <span className={styles.description}>{product?.description}</span>
    </Modal>
  )
}

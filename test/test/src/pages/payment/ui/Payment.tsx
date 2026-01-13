import React from 'react'
import { CreditCard } from 'widgets/creditCard/ui/CreditCard'

import styles from './Payment.module.scss'

const Payment = () => {
  const toPay = () => {}
  return (
    <div className={styles.wrapper}>
      <div className={styles.payment}>
        <CreditCard />
        <button onClick={toPay} className={styles.button}>
          Оплатить
        </button>
      </div>
    </div>
  )
}
export default Payment

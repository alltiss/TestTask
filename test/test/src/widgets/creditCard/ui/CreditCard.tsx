import type { ChangeEvent } from 'react'
import { useState } from 'react'

import { cardStyle, formatCardNumber } from '../lib/utils'
import styles from './CreditCard.module.scss'

export const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')

  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardNumber(formatCardNumber(e.target.value))
  }

  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.background} />
      <div className={styles.texture} />
      <div className={styles.plastic} />

      <header className={styles.bank}>
        <div>VTB</div>
      </header>

      <input
        placeholder="**** **** **** ****"
        value={cardNumber}
        onChange={handleNumberChange}
        className={styles.number}
      />
    </div>
  )
}

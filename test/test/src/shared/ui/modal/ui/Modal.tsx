import clsx from 'clsx'
import type { FC, ReactNode } from 'react'
import React from 'react'

import styles from './Modal.module.scss'

type ModalProps = {
  isOpen: boolean
  onCancel: () => void
  headerText?: string
  wrapperClass?: string
  headerClass?: string
  contentClass?: string
  children?: ReactNode
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onCancel,
  headerText,
  wrapperClass,
  headerClass,
  contentClass,
  children,
}) => (
  <div
    className={clsx(styles.overlay, {
      [styles.open]: isOpen,
    })}
    onClick={onCancel}
  >
    <div className={clsx(styles.modal, wrapperClass)} onClick={(e) => e.stopPropagation()}>
      <button className={styles.close} onClick={onCancel}>
        ✕
      </button>

      {headerText && <h2 className={clsx(styles.header, headerClass)}>{headerText}</h2>}

      {children && <div className={clsx(styles.content, contentClass)}>{children}</div>}
    </div>
  </div>
)

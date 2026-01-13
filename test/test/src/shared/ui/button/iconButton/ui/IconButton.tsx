import clsx from 'clsx'
import { ButtonHTMLAttributes, FC, type SVGProps } from 'react'

import styles from './IconButton.module.scss'

type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  title: string
  Icon: SVGProps<SVGSVGElement>
  classNameIcon?: string
  classNameButton?: string
}

export const IconButton: FC<IconButtonProps> = ({
  title,
  Icon,
  classNameButton,
  classNameIcon,
  ...rest
}) => {
  return (
    <button className={clsx(classNameButton ?? '')} {...rest} aria-label={title}>
      <Icon className={clsx(styles.icon, classNameIcon ?? '')} />
    </button>
  )
}

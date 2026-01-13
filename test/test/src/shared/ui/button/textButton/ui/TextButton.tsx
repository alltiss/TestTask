import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'

type TextButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  title: string
  className?: string
}

export const TextButton = ({ title, className, ...rest }: TextButtonProps) => (
  <button className={clsx(className ?? '')} {...rest}>
    {title}
  </button>
)

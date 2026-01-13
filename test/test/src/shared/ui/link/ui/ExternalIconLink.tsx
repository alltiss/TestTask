import { IconLinkProps } from '../model/types'

export const ExternalIconLink = ({
  href,
  label,
  Icon,
  className,
  iconClassName,
  newTab = true,
}: IconLinkProps) => {
  const target = newTab ? '_blank' : ''
  const rel = newTab ? 'noopener noreferrer' : ''

  return (
    <a className={className ?? ''} href={href} aria-label={label} target={target} rel={rel}>
      <Icon className={iconClassName} />
    </a>
  )
}

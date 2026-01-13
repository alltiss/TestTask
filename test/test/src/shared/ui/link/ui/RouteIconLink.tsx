import { Link } from 'react-router-dom'

import { RouteIconLinkProps } from '../model/types'

export const RouteIconLink = ({
  to,
  label,
  Icon,
  className,
  iconClassName,
}: RouteIconLinkProps) => {
  return (
    <Link className={className} to={to} aria-label={label}>
      <Icon className={iconClassName} />
    </Link>
  )
}

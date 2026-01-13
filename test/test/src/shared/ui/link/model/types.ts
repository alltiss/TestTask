import type { SVGProps } from 'react'

type BaseTypeLink={
  label: string
  Icon: SVGProps<SVGSVGElement>
  className?: string
  iconClassName?: string
}
export type RouteIconLinkProps = BaseTypeLink &{
  to: string
}

export type IconLinkProps = BaseTypeLink &{
  href: string
  newTab?: boolean
}

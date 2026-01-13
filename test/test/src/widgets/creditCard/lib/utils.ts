import type { CSSProperties } from 'react'
import imgBackground from '../assets/ship.jpg'
import textureBackground from '../assets/texture.png'

export const formatCardNumber = (value: string) =>
  value
    .replace(/\D/g, '')
    .slice(0, 16)
    .replace(/(.{4})/g, '$1 ')
    .trim()

export const cardStyle: CSSProperties = {
  ['--background' as const]: `url(${imgBackground})`,
  ['--texture' as const]: `url(${textureBackground})`,
}

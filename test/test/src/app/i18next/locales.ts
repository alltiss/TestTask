export type Keys =
  | 'buy'
  | 'cart'
  | 'wirelessHeadphones'
  | 'headphones'
  | 'total'
  | 'checkout'
  | 'toShopping'
  | 'serviceTerms'
  | 'favorites'
  | 'contacts'
  | 'emptyCart'

type Translate = Record<Keys, string>

export const ru: Translate = {
  buy: 'Купить',
  cart: 'Корзина',
  wirelessHeadphones: 'Беспроводные наушники',
  headphones: 'Наушники',
  total: 'Итого',
  checkout: 'Перейти к оформлению',
  toShopping: 'Перейти к покупкам',
  serviceTerms: 'Условия сервиса',
  favorites: 'Избранное',
  contacts: 'Контакты',
  emptyCart: 'Добавьте товары в корзину',
}

export const en: Translate = {
  buy: 'Add to cart',
  cart: 'Cart',
  wirelessHeadphones: 'Wireless headphones',
  headphones: 'Headphones',
  total: 'Total',
  checkout: 'Proceed to checkout',
  toShopping: 'To shopping',
  serviceTerms: 'Service terms',
  favorites: 'Favorites',
  contacts: 'Contacts',
  emptyCart: 'Add items to cart',
}

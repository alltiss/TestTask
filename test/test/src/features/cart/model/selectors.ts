import { RootState } from 'app/store/store'

export const selectItemsInBasket = (state: RootState) => state.cart.itemsInBasket
export const selectTotalAmount = (state: RootState) => state.cart.totalAmount
export const selectTotalQuantity = (state: RootState) =>
  state.cart.itemsInBasket.reduce((sum, item) => sum + item.quantity, 0)
export const selectUniqueItemsCount = (state: RootState) => state.cart.itemsInBasket.length

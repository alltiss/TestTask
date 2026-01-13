import {
  addItem,
  clearCart,
  decrementItem,
  deleteItem,
  incrementItem,
  resetState,
} from 'features/cart/model/slice'
import {
  selectItemsInBasket,
  selectTotalAmount,
  selectTotalQuantity,
  selectUniqueItemsCount,
} from 'features/cart/model/selectors'

export const cartModel = {
   actions: {
    addItem,
    deleteItem,
    incrementItem,
    decrementItem,
    clearCart,
    resetState,
   },
  selectors: {
    selectItemsInBasket,
    selectTotalAmount,
    selectTotalQuantity,
    selectUniqueItemsCount
  }
};

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Product = {
  img: string;
  title: string;
  price: number;
  rating: number;
  id: number;
  discountPrice?: number;
};

type CartItem = Product & { quantity: number };

type CartState = {
  itemsInBasket: CartItem[];
  totalAmount: number;
};

const initialState: CartState = {
  itemsInBasket: [],
  totalAmount: 0,
};

const calcTotal = (items: CartItem[]) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const existing = state.itemsInBasket.find((x) => x.id === action.payload?.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.itemsInBasket.push({ ...action.payload, quantity: 1 });
      }

      state.totalAmount = calcTotal(state.itemsInBasket);
    },

    deleteItem: (state, action: PayloadAction<number>) => {
      state.itemsInBasket = state.itemsInBasket.filter((x) => x.id !== action.payload);
      state.totalAmount = calcTotal(state.itemsInBasket);
    },

    incrementItem: (state, action: PayloadAction<number>) => {
      const existing = state.itemsInBasket.find((x) => x.id === action.payload);
      if (!existing) return;

      existing.quantity += 1;
      state.totalAmount = calcTotal(state.itemsInBasket);
    },

    decrementItem: (state, action: PayloadAction<number>) => {
      const existing = state.itemsInBasket.find((x) => x.id === action.payload);
      if (!existing) return;

      if (existing.quantity > 1) {
        existing.quantity -= 1;
      }

      state.totalAmount = calcTotal(state.itemsInBasket);
    },

    clearCart: (state) => {
      state.itemsInBasket = [];
      state.totalAmount = 0;
    },

    resetState: () => initialState,
  },
});

export const {
  addItem,
  deleteItem,
  incrementItem,
  decrementItem,
  clearCart,
  resetState,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

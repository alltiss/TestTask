import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from 'features/cart/model/slice'

export const store = configureStore({
    reducer: {
      cart: cartReducer,
      },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

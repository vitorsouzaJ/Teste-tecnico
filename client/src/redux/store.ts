import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

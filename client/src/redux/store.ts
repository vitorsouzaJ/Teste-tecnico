import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart/cartSlice";
import wishlist from "./cart/wishlist";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishlist,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

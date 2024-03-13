import { createSlice } from "@reduxjs/toolkit";
import { IWishlist } from "../../types/wishlist";

const initialState: IWishlist = {
  items: [],
};

const wishlist = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemWishlist(state, action) {
      state.items.push(action.payload);
    },
    removeItemWishlist(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
// exportar os reducers para serem utilizados em páginas e componentes
export const { addItemWishlist, removeItemWishlist } = wishlist.actions;

// exportar o estado do carrinho para ser utilizado em páginas e componentes
export const getWishlistState = (state: { wishlist: IWishlist }) =>
  state.wishlist.items;

export default wishlist.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { ICartState } from "../../types/cart";

const initialState: ICartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  // A lógica dos reducers poderá ser alterada se necessário
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
// exportar os reducers para serem utilizados em páginas e componentes
export const { addItem, removeItem } = cartSlice.actions;

// exportar o estado do carrinho para ser utilizado em páginas e componentes
export const getCartItemsState = (state: { cart: ICartState }) =>
  state.cart.items;

export default cartSlice.reducer;

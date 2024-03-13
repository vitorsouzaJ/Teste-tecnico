import { useState } from "react";
import * as Styles from "./styles.js";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { useAppDispatch } from "../../../../hooks/redux.js";
import { addItem } from "../../../../redux/cart/cartSlice.js";
import { addItemWishlist } from "../../../../redux/cart/wishlist.js";

interface AddItemToCartProps {
  setCart: (cart: string) => void;
  cart: string;
  wishlist: string;
  setWishlist: (wishlist: string) => void;
}

export const AddItemToCart: React.FC<AddItemToCartProps> = ({
  setCart,
  cart,
  wishlist,
  setWishlist,
}) => {
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    dispatch(
      addItem({
        name: cart,
      })
    );
    setCart("");
  };

  const handleAddwishlist = () => {
    dispatch(
      addItemWishlist({
        name: wishlist,
      })
    );
    setWishlist("");
  };
  return (
    //Botões que seram iniciados dentro do componente do produto
    <Styles.Container>
      <Styles.Button
        color={"b8b814"}
        hoverColor={"cbcf00"}
        onClick={() => handleAddwishlist()}
      >
        <FaHeart />
        Desejo
      </Styles.Button>
      <Styles.Button
        color={"008000"}
        hoverColor={"228b22"}
        onClick={() => handleAdd()}
      >
        <FaCartPlus />
        Adicionar ao carrinho
      </Styles.Button>
    </Styles.Container>
  );
};

import { useState } from "react";
import * as Styles from "./styles.js";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { useAppDispatch } from "../../../../hooks/redux.js";
import { addItem } from "../../../../redux/cart/cartSlice.js";

interface AddItemToCartProps {
  setName: (name: string) => void;
  name: string;
}
export const AddItemToCart: React.FC<AddItemToCartProps> = ({
  setName,
  name,
}) => {
  // useDispatch para executar uma ação do carrinho (reducer do cartSlice)
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    dispatch(
      addItem({
        id: Math.random(),
        name,
        price: (Math.random() * 10).toFixed(2),
      })
    );
    setName("");
  };

  return (
    //Botões que seram iniciados dentro do componente do produto
    <Styles.Container>
      <Styles.Button color={"b8b814"} hoverColor={"cbcf00"}>
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

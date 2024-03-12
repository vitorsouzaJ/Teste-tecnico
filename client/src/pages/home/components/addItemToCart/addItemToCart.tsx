import * as Styles from "./styles.js";
import { FaCartPlus, FaHeart } from "react-icons/fa";

export const AddItemToCart = () => {
  return (
    //Botões que seram iniciados dentro do componente do produto
    <Styles.Container>
      <Styles.Button color={"b8b814"} hoverColor={"cbcf00"}>
        <FaHeart />
        Desejo
      </Styles.Button>
      <Styles.Button color={"008000"} hoverColor={"228b22"}>
        <FaCartPlus />
        Adicionar ao carrinho
      </Styles.Button>
    </Styles.Container>
  );
};

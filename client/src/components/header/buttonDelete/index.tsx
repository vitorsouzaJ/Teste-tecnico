import { ProductBlockProps } from "../../../types/cart";
import { MdDelete } from "react-icons/md";
import * as styles from "./styles";

export const ButtonDelete: React.FC<ProductBlockProps> = ({
  item,
  handleRemove,
}) => {
  //Bloco que ira aparecer os itens do carrinho
  return (
    <styles.button onClick={() => handleRemove(item.id)}>
      <MdDelete />
    </styles.button>
  );
};

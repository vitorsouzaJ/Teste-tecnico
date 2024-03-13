import { ButtonDelete } from "../../../../components/header/buttonDelete";
import { ProductBlockProps } from "../../../../types/cart";
import * as ItemsListStyles from "./styles";

export const Items: React.FC<ProductBlockProps> = ({ item, handleRemove }) => {
  //Bloco que ira aparecer os itens do carrinho
  return (
    <ItemsListStyles.Container>
      <ButtonDelete item={item} handleRemove={handleRemove}></ButtonDelete>
      <ItemsListStyles.CartImg
        imageUrl={item.imageUrl}
      ></ItemsListStyles.CartImg>
      <p key={item.id}>
        {item.name} - R$ {item.price}
      </p>
    </ItemsListStyles.Container>
  );
};

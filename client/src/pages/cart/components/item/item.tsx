import { ProductBlockProps } from "../../../../types/cart";
import * as ItemsListStyles from "./styles";
import { ButtonDelete } from "../../../../components/header/buttonDelete/index";

export const Items: React.FC<ProductBlockProps> = ({ item, handleRemove }) => {
  //Bloco que ira aparecer os itens do carrinho

  return (
    <ItemsListStyles.Container>
      <ButtonDelete item={item} handleRemove={handleRemove}></ButtonDelete>
      <ItemsListStyles.CartImg imageUrl={item.test}></ItemsListStyles.CartImg>
      <ItemsListStyles.ProductInfo>
        <p key={item.id}>
          Qnt-{item.count} {item.name}
        </p>
        <p key={item.id}>R$ {item.price}</p>
      </ItemsListStyles.ProductInfo>
    </ItemsListStyles.Container>
  );
};

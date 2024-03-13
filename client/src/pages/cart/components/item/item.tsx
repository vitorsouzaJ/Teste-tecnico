import { ProductBlockProps } from "../../../../types/cart";
import * as ItemsListStyles from "./styles";

export const Items: React.FC<ProductBlockProps> = ({ item }) => {
  //Bloco que ira aparecer os itens do carrinho

  console.log(item, "item");
  return (
    <ItemsListStyles.Container>
      <ItemsListStyles.CartImg
        imageUrl={item.imageUrl}
      ></ItemsListStyles.CartImg>
      <p key={item.id}>
        Qnt-{item.count} {item.name} - R$ {item.price}
      </p>
    </ItemsListStyles.Container>
  );
};

import { useSelector } from "react-redux";
import { getCartItemsState } from "../../../../redux/cart/cartSlice";
import * as ItemsListStyles from "./styles";

export const ItemsList = () => {
  // useSelector para pegar o estado do carrinho usando a const exportada do cartSlice
  const items = useSelector(getCartItemsState);

  return (
    <ItemsListStyles.Container>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} - R$ {item.price}
        </li>
      ))}
    </ItemsListStyles.Container>
  );
};

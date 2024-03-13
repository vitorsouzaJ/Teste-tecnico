import { useSelector } from "react-redux";
import { getCartItemsState } from "../../../../redux/cart/cartSlice";
import * as ItemsListStyles from "./styles";
import { Items } from "../item/item";
import { IProduct, ItemMap } from "../../../../types/cart";

export const ItemsList = () => {
  const items = useSelector(getCartItemsState);

  // Função para processar os itens e retornar uma lista atualizada com a contagem de repetições
  const processItems = (items: IProduct) => {
    const itemMap: ItemMap = {};
    items.forEach((item: IProduct) => {
      const itemId = item.name.id;
      if (itemId in itemMap) {
        itemMap[itemId].count++;
      } else {
        itemMap[itemId] = { ...item.name, count: 1 }; // Adicionando count ao item
      }
    });
    return Object.values(itemMap);
  };

  const processedItems = processItems(items);

  return (
    <ItemsListStyles.Container>
      {processedItems.map(
        (item, index) =>
          item.name != null && (
            <ItemsListStyles.Item key={index}>
              <Items item={item} />
            </ItemsListStyles.Item>
          )
      )}
    </ItemsListStyles.Container>
  );
};

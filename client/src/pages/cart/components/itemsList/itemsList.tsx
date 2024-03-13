import { useSelector } from "react-redux";
import cartSlice, {
  getCartItemsState,
  removeItem,
  editItemCount,
} from "../../../../redux/cart/cartSlice";
import * as ItemsListStyles from "./styles";
import { Items } from "../item/item";
import { IProduct, ItemMap } from "../../../../types/cart";
import { useAppDispatch } from "../../../../hooks/redux";
import { processItemsUtils } from "../../../../utils/utils";

export const ItemsList = () => {
  const items = useSelector(getCartItemsState);

  // Função para processar os itens e retornar uma lista atualizada com a contagem de repetições

  const processedItems = processItemsUtils(items);

  const dispatch = useAppDispatch();

  const handleRemove = (itemId) => {
    // Aqui você pode passar o ID do item que deseja remover
    dispatch(
      removeItem(itemId) // Suponha que você tenha uma variável itemId
    );
  };

  return (
    <ItemsListStyles.Container>
      {processedItems.map(
        (item, index) =>
          item.name != null && (
            <ItemsListStyles.Item key={index}>
              <Items item={item} handleRemove={handleRemove} />
            </ItemsListStyles.Item>
          )
      )}
    </ItemsListStyles.Container>
  );
};

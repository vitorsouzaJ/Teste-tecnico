import { IProduct, ItemMap } from "../types/cart";

export const processItemsUtils = (items: IProduct) => {
  const itemMap: ItemMap = {};
  items.forEach((item: IProduct) => {
    const itemId = item.id;
    if (itemId in itemMap) {
      itemMap[itemId].count++;
    } else {
      itemMap[itemId] = { ...item, count: 1 }; // Adicionando count ao item
    }
  });
  return Object.values(itemMap);
};

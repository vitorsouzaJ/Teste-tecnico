export interface ICartState {
  items: IProduct[];
}

export interface IProduct {
  id: string;
  price: number;
  name: string;
  imageUrl: string;
  width: number;
  height: number;
  rim: number;
  popularity: number;
  sold: number;
  count: number;
}

export interface ProductBlockProps {
  product: IProduct;
}

export interface ItemMap {
  [itemId: string]: {
    name: string;
    id: string;
    count: number;
  };
}

export interface ProductBlockProps {
  product: IProduct;
}

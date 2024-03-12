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
  rimSizes: { rim: number }[];
}

export interface ProductBlockProps {
  product: IProduct;
}

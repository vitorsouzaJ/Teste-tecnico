interface IProduct {
  id: number;
  name: string;
  price: number;
  // Somente um placeholder
  // Criar arquivo types/product.ts e definir interface IProduct corretamente
}

export interface ICartState {
  items: IProduct[];
}

export interface IProducts {
  id: string;
  price: number;
  name: string;
  imageUrl: string;
  width: number;
  height: number;
  rimSizes: { rim: number }[];
}

import { IProduct } from "../../../types/cart";

export const product: IProduct[] = [];

// Função para reordenar por preço (do menor para o maior)
export function sortByPriceAscending(products: IProduct[]): IProduct[] {
  return products.slice().sort((a, b) => a.price - b.price);
}

// Função para reordenar por preço (do maior para o menor)
export function sortByPriceDescending(products: IProduct[]): IProduct[] {
  return products.slice().sort((a, b) => b.price - a.price);
}

// Função para reordenar por popularidade (do maior para o menor)
export function sortByPopularityDescending(products: IProduct[]): IProduct[] {
  return products.slice().sort((a, b) => b.popularity - a.popularity);
}

// Função para reordenar por quantidade vendida (do menor para o maior)
export function sortBySoldAscending(products: IProduct[]): IProduct[] {
  return products.slice().sort((a, b) => a.sold - b.sold);
}

// Função para reordenar por quantidade vendida (do maior para o menor)
export function sortBySoldDescending(products: IProduct[]): IProduct[] {
  return products.slice().sort((a, b) => b.sold - a.sold);
}

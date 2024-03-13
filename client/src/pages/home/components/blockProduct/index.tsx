import { useState } from "react";
import { IProduct, ProductBlockProps } from "../../../../types/cart";
import { AddItemToCart } from "../addItemToCart/addItemToCart.js";

import * as Styles from "./styles.js";

const ProductBlock: React.FC<ProductBlockProps> = ({ product }) => {
  const [cart, setCart] = useState<IProduct>(product);
  const [wishlist, setWishlist] = useState<IProduct>(product);

  return (
    //Componente para  montar  bloco de 1 produto
    <Styles.Container>
      <Styles.ProductContainer>
        <Styles.ProductInfo>
          <p>{product.name}</p>
          <p>R${product.price}</p>
        </Styles.ProductInfo>
        <Styles.ProductImage imageUrl={product.imageUrl}></Styles.ProductImage>
        <Styles.AddItemToCart>
          <AddItemToCart
            setCart={setCart}
            cart={cart}
            wishlist={wishlist}
            setWishlist={setWishlist}
          ></AddItemToCart>
        </Styles.AddItemToCart>
      </Styles.ProductContainer>
    </Styles.Container>
  );
};

export default ProductBlock;

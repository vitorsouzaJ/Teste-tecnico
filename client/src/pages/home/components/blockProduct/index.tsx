import { useState } from "react";
import { ProductBlockProps } from "../../../../types/cart";
import { AddItemToCart } from "../addItemToCart/addItemToCart.js";

import * as Styles from "./styles.js";

const ProductBlock: React.FC<ProductBlockProps> = ({ product }) => {
  const [name, setName] = useState<string>(product);

  return (
    //Componente para que monda o bloco de um so produto
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}></Styles.ProductImage>
      <Styles.AddItemToCart>
        <AddItemToCart setName={setName} name={name}></AddItemToCart>
      </Styles.AddItemToCart>
    </Styles.ProductContainer>
  );
};

export default ProductBlock;

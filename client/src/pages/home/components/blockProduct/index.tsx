import { ProductBlockProps } from "../../../../types/cart";

import * as Styles from "./styles.js";

const ProductBlock: React.FC<ProductBlockProps> = ({ product }) => {
  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}></Styles.ProductImage>
    </Styles.ProductContainer>
  );
};

export default ProductBlock;

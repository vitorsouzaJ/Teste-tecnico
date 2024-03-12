import { product } from "../../../../data/product";
import ProductBlock from "../blockProduct";
import * as Styles from "./styles.js";

export const Products = () => {
  return (
    <Styles.Container>
      {product.map((product) => (
        <ProductBlock product={product}></ProductBlock>
      ))}
    </Styles.Container>
  );
};

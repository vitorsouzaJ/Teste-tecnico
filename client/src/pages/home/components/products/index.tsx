import { product } from "../../../../data/product";
import ProductBlock from "../blockProduct";
import * as Styles from "./styles.js";

export const Products = () => {
  return (
    //Componente que ira replicar os produtos
    <Styles.Container>
      {product.map((product) => (
        <ProductBlock product={product}></ProductBlock>
      ))}
    </Styles.Container>
  );
};

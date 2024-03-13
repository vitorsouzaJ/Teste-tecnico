import { useState } from "react";
import { product } from "../../../../data/product";
import ProductBlock from "../blockProduct";
import * as Styles from "./styles.js";
import { FaSearch } from "react-icons/fa";
import { IProduct } from "../../../../types/cart.js";

export const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedValue, setSelectedValue] = useState("name");

  const handleSubmit = (d) => {
    d.preventDefault();
    setFilter(searchTerm);
  };

  const filteredProducts = (nomePropriedade) => {
    return product.filter((produto) =>
      produto[nomePropriedade]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Styles.Form onSubmit={handleSubmit}>
        <Styles.FormContainer>
          <Styles.Select value={selectedValue} onChange={handleSelectChange}>
            <option value="price">Preço</option>
            <option value="width">Largura</option>
            <option value="height">Altura</option>
            <option value="rimSizes.rim">Aro</option>
            <option value="name">Nome</option>
          </Styles.Select>
          <Styles.Input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <Styles.SearchButton type="submit">
            <FaSearch />
          </Styles.SearchButton>
        </Styles.FormContainer>
      </Styles.Form>

      <Styles.Container>
        {filteredProducts(selectedValue).map((product) => (
          <ProductBlock product={product}></ProductBlock>
        ))}
      </Styles.Container>
    </>
  );
};

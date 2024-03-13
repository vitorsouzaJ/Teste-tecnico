import { useState } from "react";
import { product } from "../../../../data/product";
import ProductBlock from "../blockProduct";
import * as Styles from "./styles.js";
import { FaSearch } from "react-icons/fa";
import {
  sortByPopularityDescending,
  sortByPriceAscending,
  sortByPriceDescending,
  sortBySoldAscending,
  sortBySoldDescending,
} from "../../utils/index.js";

export const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedValue, setSelectedValue] = useState("name");
  const [sortBy, setSortBy] = useState("biggestPrice"); // Estado para armazenar a opção selecionada

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSubmit = (d) => {
    d.preventDefault();
    setFilter(searchTerm);
  };

  const filteredProducts = (nomePropriedade) => {
    let filtered = product.filter((produto) =>
      produto[nomePropriedade]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
    switch (sortBy) {
      case "biggestPrice":
        return sortByPriceDescending(filtered);
      case "LowestPrice":
        return sortByPriceAscending(filtered);
      case "bestSellers":
        return sortBySoldDescending(filtered);
      case "leastSold":
        return sortBySoldAscending(filtered);
      case "moreRelevant":
        return sortByPopularityDescending(filtered);
      default:
        return filtered;
    }
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
            <option value="rim">Aro</option>
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
      <Styles.Ordering>
        <Styles.Select value={sortBy} onChange={handleSortChange}>
          <option value="biggestPrice">MAIOR PREÇO</option>
          <option value="LowestPrice">MENOR PREÇO</option>
          <option value="bestSellers">MAIS VENDIDOS</option>
          <option value="leastSold">MENOS VENDIDOS</option>
          <option value="moreRelevant">MAIS RELEVANTE</option>
        </Styles.Select>
      </Styles.Ordering>
      <Styles.Container>
        {filteredProducts(selectedValue).map((product) => (
          <ProductBlock product={product}></ProductBlock>
        ))}
      </Styles.Container>
    </>
  );
};

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* Adicionando position relative */

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ProductInfo = styled.div`
  margin-top: 5px;
  display: grid;
  justify-content: center;
  align-items: start;
  justify-items: center;
  background-color: #d3d3d3;
  height: 100px;
  width: 250px;
  border-radius: 10px;
  padding: 10px;

  p {
    font-size: 1.1rem;
    font-weight: 500;
    margin-right: 10px;
    text-align: center;
  }
`;
export const ProductImage = styled.div`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 320px;
  width: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: flex-end;
  transition: all 0.3s ease;
  background-color: transparent;
  background-blend-mode: color;
  position: relative;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: color;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AddItemToCart = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

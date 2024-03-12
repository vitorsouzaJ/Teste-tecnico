import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductImage = styled.div`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 380px;
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

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: color;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

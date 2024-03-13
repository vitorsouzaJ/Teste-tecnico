import styled from "styled-components";

export const CartImg = styled.div`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 50vh;
  width: 50vh;
  background-size: contain;
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
  margin: 20px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: color;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap; /* Adicionando flex-wrap */
`;

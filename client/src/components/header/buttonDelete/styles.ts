import styled from "styled-components";

export const button = styled.button`
  font-size: 24px; // Ajuste o tamanho do ícone conforme desejado
  color: red;
  background-color: transparent;
  background-blend-mode: color;
  border: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: color;
    cursor: pointer;
  }
`;

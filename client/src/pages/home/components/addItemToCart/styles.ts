import styled from "styled-components";

interface ButtonProps {
  color: string;
  hoverColor: string;
}

export const Button = styled.button<ButtonProps>`
  padding: 10px 15px;
  background-color: ${(props) => `#${props.color}`};
  color: #fff;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-wrap: nowrap;
  gap: 4px;

  &:hover {
    background-color: ${(props) => `#${props.hoverColor}`};
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

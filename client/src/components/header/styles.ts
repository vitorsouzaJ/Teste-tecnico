import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  gap: 1rem;
  width: 100%;
  background-color: #ff6300;
  box-shadow: 0px 4px 10px -4px rgba(0, 0, 0, 0.74);
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: 200ms;

  &:hover {
    background-color: #cf4f00;
  }
`;

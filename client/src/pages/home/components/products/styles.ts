import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: start;
  padding: 50px;
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Form = styled.form`
  padding: 15px;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Select = styled.select`
  margin-right: 5px;
  height: 25px;
  border-radius: 10px;
  padding-left: 10px;
`;

export const Input = styled.input`
  margin-right: 5px;
  width: 70vh;
  height: 25px;
  border-radius: 10px;
  padding: 8px;
`;

export const SearchButton = styled.button`
  cursor: pointer;
  height: 25px;
  background-color: transparent;
  background-blend-mode: color;
  border: none;
  padding: 0px;

  &:hover {
    background-color: back;
    background-blend-mode: color;
    cursor: pointer;
  }
`;

import styled from "styled-components";

const ButtonWhite = styled.button`
  /* all declarations will be prefixed */
  border-radius: 50px;
  background: #941c1e !important;
  padding: 5px 20px 5px 20px;
  border: 1px solid #cccccc;

  color: white;

  /* pseudo selectors work as well */
  &:hover {
    border-radius: 50px;
    color: white;
    border: 1px solid #941c1e !important;
    padding: 5px 20px 5px 20px;
    background: #941c1e !important;
    box-shadow: 0 0.1rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  }
`;

export default ButtonWhite;

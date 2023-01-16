import styled from "styled-components";

const ButtonLink = styled.button`
  /* all declarations will be prefixed */
  color: #941c1e !important;
  text-decoration: none;

  /* pseudo selectors work as well */
  &:hover {
    color: #595959 !important;
    text-decoration: none;
  }
`;

export default ButtonLink;

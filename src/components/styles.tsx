import styled from "styled-components";

interface ButtonThemeProps {
  themeAcronym: string,
}

export const StyledButtonTheme = styled.li<ButtonThemeProps>`
  width: 25.333rem;
  height: 16.438rem;
  background-color: ${(props) => `var(--colorTheme-${props.themeAcronym})`};
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 4.5rem;
  list-style: none;
  padding: 1.875rem;
  transition: transform .15s;

  &:hover {
    transform: scale(1.025);
  }

  & h3{
    font-weight: 300;
    text-align: right;
    color: #686868;
  }
`;
import styled from "styled-components";

interface ButtonThemeProps {
  themeAcronym: string,
}

export const StyledButtonTheme = styled.li<ButtonThemeProps>`
  width: 25.333rem;
  height: 16.438rem;
  background-color: ${(props) => `var(--colorTheme-${props.themeAcronym})`};
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  row-gap: 4.5rem;
  list-style: none;
  padding: 1.875rem;
  transition: transform .15s;

  &:hover {
    transform: scale(1.025);
  }

  & h3 {
    font-weight: 300;
    text-align: right;
    color: #686868;
  }
`;

export const StyledDescription = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 3.125rem;

  & p {
    font-size: 1.25rem;
    color: #686868;
  }
`;

export const StyledDescriptionMessage = styled.div`
  width: 39rem;
  height: 5rem;
  display: flex;
  align-items: center;
  
  & span {
    position: relative;
    width: 8.25rem;
    height: 2rem;
    align-self: flex-end;
    background-color: #ffd600;
    border-radius: 10px;
  }

  & h1 {
    position: absolute;
    font-size: 3.125rem;
    margin-inline: 1.125rem;
    color: #6A3709;
  }
`;
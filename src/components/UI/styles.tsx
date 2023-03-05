import styled from "styled-components";

interface ButtonThemeProps {
  themeAcronym: string,
}

interface ButtonProps {
  isGivingUp: boolean,
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

export const StyledSupportMessage = styled.footer`
  width: 100%;
  background-color: #FFFBE4;
  padding-block: 7.5rem;
  padding-inline-start: 5rem;
`;

export const StyledSupportWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSupportText = styled.hgroup`
  display: flex;
  flex-direction: column;
  row-gap: 4.125rem;

  & h1 {
    font-size: 4.375rem;
  }

  & p {
    color: #686868;
  }
`;

export const StyledSupportFooter = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  background-color: #ffd600;
  padding: .75rem;
`;

export const StyledButtonWrapper = styled.div<ButtonProps>`
  width: 12.5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  & span {
    position: relative;
    width: 12.5rem;
    height: 2.813rem;
    background: ${(props) => props.isGivingUp ? `rgba(157, 157, 157, 0.5)` : `#ffd600`};
    border-radius: 10px;
  }

  & button {
    position: absolute;
    background-color: transparent;
    font-size: 3.125rem;
    color: ${(props) => props.isGivingUp ? `#3B3B3B` : `#6A3709`};
    border: none;
    outline: none;
  }
`;
import React from "react";
import { StyledButtonWrapper } from "./styles";

interface ButtonProps {
  buttonLabel: string,
  buttonType: "button" | "reset" | "submit" | undefined,
  testState: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const Button = (props: ButtonProps) => {
  return (
    <StyledButtonWrapper isGivingUp={props.testState}>
      <span />
      <button type={props.buttonType} onClick={props.onClick}>{props.buttonLabel}</button>
    </StyledButtonWrapper>
  )
};

export default Button;
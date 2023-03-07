import React from "react";
import { StyledInputName, StyledInputNameWrapper, StyledLabelInputName } from "./styles";

interface InputProps {
  reference: React.RefObject<HTMLInputElement>,
}

const InputName = (props: InputProps) => {
  return (
    <StyledInputNameWrapper>
      <StyledLabelInputName>
        <span />
        <label htmlFor="studentName">Nome:</label>
      </StyledLabelInputName>
      <StyledInputName>
        <span />
        <input ref={props.reference} type="text" name="studentName" id="studentName" placeholder="Nome de suricato" />
      </StyledInputName>
      <div style={{ display: "flex", columnGap: "1.25rem", justifyContent: "right" }}>
        <span className="firstUnderscoreDetail" />
        <span className="secondUnderscoreDetail" />
      </div>
    </StyledInputNameWrapper>
  )
};

export default InputName;
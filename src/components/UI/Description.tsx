import React from "react";
import { StyledDescription, StyledDescriptionMessage } from "./styles";

const Description = () => {
  return (
    <StyledDescription>
      <StyledDescriptionMessage>
        <span></span>
        <h1>Teste seu conhecimento!</h1>
      </StyledDescriptionMessage>
      <p>
        Para ter acesso as questões preencha seu nome abaixo e selecione o <span className="wordUnderline">tema</span><br />
        que desejar:
      </p>
    </StyledDescription>
  );
};

export default Description;
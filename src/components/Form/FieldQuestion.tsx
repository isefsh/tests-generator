import React from "react";
import Button from "../UI/Button";
import { StyledFieldQuestion, StyledLabelQuestion, StyledQuestionDiv, StyledQuestionSection } from "./styles";

const FieldQuestion = () => {
  return (
    <StyledQuestionSection id="mainSection">
      <hgroup>
        <h1>IHC</h1>
        <div style={{ display: "flex", columnGap: ".563rem" }}>
          <span className="firstUnderscore" />
          <span className="secondUnderscore" />
        </div>
      </hgroup>
      <form>
        <StyledQuestionDiv>
          <header>
            <hgroup>
              <h1>Questão 1</h1>
              <div style={{ display: "flex", columnGap: ".563rem" }}>
                <span className="firstUnderscore" />
                <span className="secondUnderscore" />
              </div>
            </hgroup>
            <h3>Interação Humano Computador</h3>
          </header>
          <StyledFieldQuestion>
            <legend>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem
              Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum :
            </legend>
            <StyledLabelQuestion htmlFor="alternative-01">
              <input type="radio" name="answer" id="alternative-01" />
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem.
            </StyledLabelQuestion>
            <StyledLabelQuestion htmlFor="alternative-01">
              <input type="radio" name="answer" id="alternative-01" />
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem.
            </StyledLabelQuestion>
          </StyledFieldQuestion>
        </StyledQuestionDiv>
        <div style={{ display: "flex", columnGap: "3.125rem", justifyContent: "right" }}>
          <Button buttonLabel="Desistir" buttonType="button" testState={true} />
          <Button buttonLabel="Avançar" buttonType="submit" testState={false} />
        </div>
      </form>
    </StyledQuestionSection>
  );
};

export default FieldQuestion;
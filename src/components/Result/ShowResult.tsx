import React from "react";
import LineDetail from "../UI/LineDetail";
import { ResultScoreSection, ResultScoreText, ScorePercentage, StyledImage, StyledResultHeader, StyledResultOutput } from "./styles";

const ShowResult = () => {
  return (
    <ResultScoreSection>
      <StyledResultOutput>
        <StyledResultHeader>
          <hgroup>
            <h1>IHC</h1>
            <LineDetail isQuestionPage={false} />
          </hgroup>
          <h3>Interação Humano Computador</h3>
        </StyledResultHeader>
        <ResultScoreText>
          <p>Você acertou <strong>8/10</strong> questões e obteve</p>
          <ScorePercentage>
            <span />
            <output>
              80%
            </output>
          </ScorePercentage>
        </ResultScoreText>
        <footer>
          <LineDetail isQuestionPage={true} />
        </footer>
      </StyledResultOutput>
      <StyledImage>
        <h1>Parabéns, Suricato!</h1>
        <p>Suricato feliz ;)</p>
      </StyledImage>
    </ResultScoreSection>
  );
};

export default ShowResult;

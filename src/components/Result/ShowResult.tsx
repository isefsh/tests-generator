import React from "react";
import { useNavigate } from "react-router-dom";
import { TestContext } from "../../context/TestContext";
import { StyledFinalLine } from "../Header/styles";
import LineDetail from "../UI/LineDetail";
import ConditionalImage from "./ConditionalImage";
import ShowAnswers from "./ShowAnswers";
import { ResultScoreSection, ResultScoreText, ScorePercentage, StyledImage, StyledNavigate, StyledResultHeader, StyledResultOutput } from "./styles";

const ShowResult = () => {
  const toNavigate = useNavigate();
  const { testData } = React.useContext(TestContext);

  function countResult () {
    const nQuestions = testData.questions.length;

    let count = 0;

    for (let i = 0; i < nQuestions; i++) {
      if (testData.questions[i].result === "Right") {
        count++;
      }
    }

    return `${count}/${nQuestions}`
  }

  return (
    <React.Fragment>
      <ResultScoreSection>
        <StyledResultOutput>
          <StyledResultHeader>
            <hgroup>
              <h1>{testData.theme.abbrTheme}</h1>
              <LineDetail isQuestionPage={false} />
            </hgroup>
            <h3>{testData.theme.name}</h3>
          </StyledResultHeader>
          <ResultScoreText>
            <p>
              Você acertou <strong>{countResult()}</strong> questões e obteve
            </p>
            <ScorePercentage>
              <span />
              <output>{`${(parseInt(countResult()) * 100) / 10}%`}</output>
            </ScorePercentage>
          </ResultScoreText>
          <footer>
            <LineDetail isQuestionPage={true} />
          </footer>
        </StyledResultOutput>
        <ConditionalImage score={parseInt(countResult())} />
      </ResultScoreSection>
      <StyledNavigate>
        <span />
        <button type="button" onClick={() => { toNavigate("/question") }}>Tentar de novo</button>
      </StyledNavigate>
      <StyledFinalLine />
      <ShowAnswers />
    </React.Fragment>
  );
};

export default ShowResult;

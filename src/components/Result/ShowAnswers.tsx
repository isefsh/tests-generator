import React from "react";
import { TestContext } from "../../context/TestContext";
import { QuestionsProps } from "../../interfaces/test-interface";
import LineDetail from "../UI/LineDetail";
import { AnswerHeader, AnswersSection, AnswersWrapper } from "./styles";
import { StyledQuestionDiv, StyledFieldQuestion, StyledLabelQuestion } from "../Form/styles";

const ShowAnswers = () => {
  const { testData } = React.useContext(TestContext);
  return (
    <AnswersSection>
      <AnswerHeader>
        <hgroup style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 style={{ fontSize: "2.5em" }}>Gabarito</h1>
          <LineDetail isQuestionPage={false} />
        </hgroup>
        <p>Veja abaixo o gabarito das questões:</p>
      </AnswerHeader>
      <AnswersWrapper>
        {
          testData.questions.map((question: QuestionsProps, index: number) => {
            return (
              <StyledQuestionDiv key={`questionAnswer-${index}`} isResultPage={true} statusQuestion={question.result}>
                <header>
                  <hgroup>
                    <h1>Questão {index + 1}</h1>
                    <div style={{ display: "flex", columnGap: ".563rem" }}>
                      <span className="firstUnderscore" />
                      <span className="secondUnderscore" />
                    </div>
                  </hgroup>
                  <h3>{testData.theme.name}</h3>
                </header>
                <StyledFieldQuestion>
                  <legend>{testData.questions[index].question}</legend>
                  {testData.questions[index].options.map(
                    (option: string, index: number) => {
                      if (index === question.rightAnswer)
                        return (
                          <StyledLabelQuestion
                            key={`options-${index}`}
                            htmlFor={`alternative-${index}`}
                            isTheRightAnswer={true}
                          >
                            <input
                              type="radio"
                              name="answer"
                              id={`alternative-${index}`}
                              value={index}
                            />
                            {option}
                          </StyledLabelQuestion>
                        );
                      if (index === question.userAnswer)
                        return (
                          <StyledLabelQuestion
                            key={`options-${index}`}
                            htmlFor={`alternative-${index}`}
                            isTheChoosenAnswer={true}
                          >
                            <input
                              type="radio"
                              name="answer"
                              id={`alternative-${index}`}
                              value={index}
                            />
                            {option}
                          </StyledLabelQuestion>
                        );
                      return (
                        <StyledLabelQuestion
                          key={`options-${index}`}
                          htmlFor={`alternative-${index}`}
                        >
                          <input
                            type="radio"
                            name="answer"
                            id={`alternative-${index}`}
                            value={index}
                          />
                          {option}
                        </StyledLabelQuestion>
                      );
                    }
                  )}
                </StyledFieldQuestion>
                <LineDetail isQuestionPage={true} />
              </StyledQuestionDiv>
            );
          })
        }
      </AnswersWrapper>
    </AnswersSection>
  );
};

export default ShowAnswers;
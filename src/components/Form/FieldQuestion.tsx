import React from "react";
import { useNavigate } from "react-router-dom";
import { TestContext } from "../../context/TestContext";
import Button from "../UI/Button";
import LineDetail from "../UI/LineDetail";
import { StyledFieldQuestion, StyledLabelQuestion, StyledQuestionDiv, StyledQuestionSection } from "./styles"; 

const FieldQuestion = () => {
  const toNavigate = useNavigate();
  const { testData, saveTestData } = React.useContext(TestContext);
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  
  const [indexQuestion, setIndexQuestion] = React.useState<number>(0);
  const updateData = React.useRef(testData);

  function nextQuestion () {
    const selectedOption = (document.querySelector('input[name="answer"]:checked') as HTMLInputElement);

    if (indexQuestion === testData.questions.length - 1) {
      saveTestData(updateData.current);
      toNavigate("/result");
    } else {
      setIndexQuestion(indexQuestion + 1);
    }

    if (selectedOption) {
      let answer = parseInt(selectedOption.value);
      updateData.current.questions[indexQuestion] = {
        ...updateData.current.questions[indexQuestion],
        userAnswer: answer,
        result: answer === testData.questions[indexQuestion].rightAnswer ? "Right" : "Wrong"
      };
    }
  }

  React.useEffect(() => {
    setIsChecked
  }, [isChecked]);

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsChecked(false);
  }

  return (
    <StyledQuestionSection id="mainSection">
      <hgroup>
        <h1>{testData.theme.abbrTheme}</h1>
        <div style={{ display: "flex", columnGap: ".563rem" }}>
          <span className="firstUnderscore" />
          <span className="secondUnderscore" />
        </div>
      </hgroup>
      <form onSubmit={onSubmitHandler}>
        <StyledQuestionDiv isResultPage={false}>
          <header>
            <hgroup>
              <h1>Questão {indexQuestion + 1}</h1>
              <div style={{ display: "flex", columnGap: ".563rem" }}>
                <span className="firstUnderscore" />
                <span className="secondUnderscore" />
              </div>
            </hgroup>
            <h3>{testData.theme.name}</h3>
          </header>
          <StyledFieldQuestion>
            <legend>{testData.questions[indexQuestion].question}</legend>
            {testData.questions[indexQuestion].options.map(
              (option: string, index: number) => (
                <StyledLabelQuestion
                  id="questionOptions"
                  key={`options-${index}`}
                  htmlFor={`alternative-${index}`}
                  onClick={() => setIsChecked(true)}
                >
                  <input
                    type="radio"
                    name="answer"
                    id={`alternative-${index}`}
                    value={index}
                    checked={isChecked}
                  />
                  {option}
                </StyledLabelQuestion>
              )
            )}
          </StyledFieldQuestion>
          <LineDetail isQuestionPage={true} />
        </StyledQuestionDiv>
        <div
          style={{
            display: "flex",
            columnGap: "3.125rem",
            justifyContent: "right",
          }}
        >
          <Button buttonLabel="Desistir" buttonType="button" testState={true} />
          <Button
            buttonLabel="Avançar"
            buttonType="submit"
            testState={false}
            onClick={nextQuestion}
          />
        </div>
      </form>
    </StyledQuestionSection>
  );
};

export default FieldQuestion;
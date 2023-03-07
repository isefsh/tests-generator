import { useState, useRef } from "react";
import Button from "../UI/Button";
import { localStorageToObject } from "../Utils/localStorageToObject";
import { StyledFieldQuestion, StyledLabelQuestion, StyledQuestionDiv, StyledQuestionSection } from "./styles";

type Question = {
  id: number;
  themeAcronym: string;
  themeFullName: string;
  question: string;
  options: string[];
  rightAnswer: number;
  userAnswer: number | null;
  result: string | null;
}

const FieldQuestion = () => {
  const questionsArrayObject: Question[] | null = localStorageToObject<Question[]>("questionsArray");
  const [questionIndex, setQuestionIndex] = useState(0);
  const updateTestData = useRef(questionsArrayObject);

  const nextQuestion = () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked') as HTMLInputElement; // corrige o nome do campo do input para "answer"
    if(selectedOption){
      let answer = parseInt(selectedOption.value);
      updateTestData.current = updateTestData.current ?? [];
        
      if(questionsArrayObject && questionIndex === questionsArrayObject.length -1){ //verifica se o usuário chegou ao final do teste
        updateTestData.current[questionIndex] = {
            ...updateTestData.current[questionIndex],
            userAnswer: answer,
            result: answer === questionsArrayObject![questionIndex].rightAnswer ? "Right" : "Wrong" // adiciona a opção de "!" para verificar se questionsArrayObject existe
        };  
        localStorage.setItem('questionsArray', JSON.stringify(updateTestData));
      
        console.log(localStorageToObject<Question[]>("questionsArray"));
      }else{
        updateTestData.current[questionIndex] = {
            ...updateTestData.current[questionIndex],
            userAnswer: answer,
            result: answer === questionsArrayObject![questionIndex].rightAnswer ? "Right" : "Wrong" // adiciona a opção de "!" para verificar se questionsArrayObject existe
        };
        setQuestionIndex(prevIndex => prevIndex + 1);
        console.log(questionIndex, questionsArrayObject?.length);
      }
      
      console.log(updateTestData);
    }else{
      alert("Selecione uma opção antes de ir para próxima pergunta");
    }
  }

  const currentQuestion = questionsArrayObject ? questionsArrayObject[questionIndex] : null;

  return (
    <StyledQuestionSection id="mainSection">
      <hgroup>
        <h1>{currentQuestion?.themeAcronym}</h1>
        <div style={{ display: "flex", columnGap: ".563rem" }}>
          <span className="firstUnderscore" />
          <span className="secondUnderscore" />
        </div>
      </hgroup>
      {currentQuestion ? (
        <form>
          <StyledQuestionDiv>
            <header>
              <hgroup>
                <h1>Questão {questionIndex + 1}</h1>
                <div style={{ display: "flex", columnGap: ".563rem" }}>
                  <span className="firstUnderscore" />
                  <span className="secondUnderscore" />
                </div>
              </hgroup>
              <h3>{currentQuestion.themeFullName}</h3>
            </header>
            <StyledFieldQuestion>
              <legend>
                {currentQuestion.question}
              </legend>
              {currentQuestion.options.map((option, index) => (
                <StyledLabelQuestion htmlFor={`alternative-${index + 1}`} key={index}>
                  <input type="radio" name="answer" id={`alternative-${index + 1}`} value={index} />
                  {option}
                </StyledLabelQuestion>
              ))}
            </StyledFieldQuestion>
          </StyledQuestionDiv>
          <div style={{ display: "flex", columnGap: "3.125rem", justifyContent: "right" }}>
            <Button buttonLabel="Desistir" buttonType="button" testState={true} />
            {questionIndex < questionsArrayObject!.length - 1 ? (
              <Button buttonLabel="Avançar" buttonType="button" testState={false} onClick={nextQuestion} />
            ) : (
              <Button buttonLabel="Finalizar" buttonType="button" testState={false} onClick={nextQuestion} />
            )}
          </div>
        </form>
      ) : (
        <p>Nenhuma pergunta encontrada.</p>
      )}
    </StyledQuestionSection>
  );
};

export default FieldQuestion;
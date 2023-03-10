import styled from "styled-components";

export const StyledInputNameWrapper = styled.div`
  width: 31.25rem;
  display: flex;
  flex-direction: column;
  row-gap: .625rem;
`;

export const StyledLabelInputName = styled.div`
  display: flex;
  align-items: center;

  & span {
    position: relative;
    width: 4.125rem;
    height: 1.375rem;
    background-color: #ffd600;
    border-radius: 10px;
  }

  & label {
    position: absolute;
    font-size: 1.25rem;
    color: #6A3709;
    padding-inline-start: .625rem;
    padding-block-end: .25rem;
  }
`;

export const StyledInputName = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3.438rem;

  & span {
    position: relative;
    width: 12.875rem;
    height: 3.5rem;
    background-color: #ffd600;
    border-radius: 10px;
  }

  & input {
    position: absolute;
    width: 22.625rem;
    padding-block: 1rem;
    padding-inline: 1.375rem;
    background-color: #F6F6F6;
    border-radius: 10px;
    border: none;
    margin-top: .25rem;
    margin-left: .313rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const StyledQuestionSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 3rem;
  margin: 0 auto;
  padding-block-end: 13.75rem;

  & hgroup {
    & h1 {
      font-size: 4.375rem;
      font-weight: 700;
    }
  }
`;

interface QuestionBox {
  isResultPage: boolean,
  statusQuestion?: string,
}

export const StyledQuestionDiv = styled.div<QuestionBox>`
  width: 89vw;
  height: 35.625em;
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
  background-color: #F6F6F6;
  border-radius: 40px;
  padding-block: 1.125rem;
  padding-inline: 1.75rem;

  ${(props) => props.isResultPage && props.statusQuestion === "Right" && (`
    background-color: #E2FDE6;
  `)}

  ${(props) => props.isResultPage && props.statusQuestion === "Wrong" && (`
    background-color: #FFECEC;
  `)}
  
  & header {
    display: flex;
    justify-content: space-between;

    & h1 {
      font-size: 2.5rem;
    }

    & h3 {
      font-size: 1.25rem;
      font-weight: 300;
      color: #686868;
    }
  }

  & fieldset {
    border: none;
  }
`;

export const StyledFieldQuestion = styled.fieldset`
  display: flex;
  flex-direction: column;
  row-gap: 1.125rem;
  padding-block: 4.75rem;
`;

interface LabelProps {
  isTheRightAnswer?: boolean,
  isTheChoosenAnswer?: boolean,
}

export const StyledLabelQuestion = styled.label<LabelProps>`
  display: flex;
  align-items: center;
  column-gap: .938rem;

  ${(props) => props.isTheRightAnswer && (`
    background-color: rgba(255, 214, 0, 0.67);
    border-radius: 5px;
  `)}

  & input {
    appearance: none;
    width: 1.625rem;
    height: 1.625rem;
    border: 3px solid #686868;
    border-radius: 50%;
    transition: background-color .15s;
    outline: none;

    &:checked {
      background-color: #FFD600;
      border-color: #6A3709;
    }

    ${(props) => props.isTheChoosenAnswer && (`
      background-color: #ffd600;
      border-color: #6a3709;
    `)}
  }
`;
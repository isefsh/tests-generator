import styled from "styled-components";

export const ResultScoreSection = styled.section`
  width: 100%;
  display: flex;
  margin-block: 3.125em;
`;

export const StyledResultOutput = styled.div`
  width: 55%;
  padding-inline-start: 11%;
  padding-inline-end: 6%;
`;

export const StyledResultHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & h1 {
    font-size: 4.375em;
  }

  & h3 {
    font-weight: 300;
    text-align: right;
    color: #686868;
  }
`;

export const ResultScoreText = styled.div`
  width: 100%;

  & p {
    font-size: 2.813em;
  }
`;

export const ScorePercentage = styled.div`
  display: flex;
  align-items: center;
  padding-block: 2.125em;
  
  & span {
    position: relative;
    width: 21.75rem;
    height: 7.25rem;
    background: #FFD600;
    border-radius: 10px;
  }

  & output {
    position: absolute;
    font-size: 12.5em;
    font-weight: 700;
  }
`;

export const StyledImage = styled.div`
  width: 45%;
  background-color: #FFFBE4;
  text-align: center;
  padding-block: 3.375em;

  & h3 {
    font-weight: 300;
  }
`;

export const AnswersSection = styled.section`
  padding-block: 1.75em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 3.25em;
`;

export const AnswersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 3.625em;
`;

export const AnswerHeader = styled.header`
  display: flex;
  flex-direction: column;
  row-gap: 1.563em;

  & p {
    font-weight: 300;
    color: #686868;
  }
`;

export const StyledNavigate = styled.div`
  width: 23%;
  height: 3.428em;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding-block-end: 3.125em;

  & span {
    position: relative;
    width: 8.875em;
    height: 2.625em;
    background-color: #ffd600;
    border-radius: 10px;
  }

  & button {
    position: absolute;
    background-color: transparent;
    font-size: 2.625em;
    color: #6A3709;
    border: none;
    outline: none;
  }
`;

export const ButtonResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4.25em;

  & a {
    color: #6A3709;
    font-size: 1.625em;
    text-decoration: none;
    border: none;
    border-bottom: 5px solid #6FDA80;
  }
`;
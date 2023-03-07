import React from "react";
import FieldQuestion from "../components/Form/FieldQuestion";
import SupportMessage from "../components/UI/SupportMessage";

const QuestionPage = () => {
  return (
    <main style={{ paddingBlockStart: "2.281em", paddingBlockEnd: "9.875em", overflowX: "hidden" }}>
      <FieldQuestion />
      <SupportMessage />
    </main>
  )
};

export default QuestionPage;
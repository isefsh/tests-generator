import React from "react";
import FieldQuestion from "../components/Form/FieldQuestion";
import SupportMessage from "../components/UI/SupportMessage";

const QuestionPage = () => {
  return (
    <main style={{ paddingBlock: "4.375rem", overflowX: "hidden" }}>
      <FieldQuestion />
      <SupportMessage />
    </main>
  )
};

export default QuestionPage;
import React from "react";
import FieldQuestion from "../components/Form/FieldQuestion";
import SupportMessage from "../components/UI/SupportMessage";

const QuestionPage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  return (
    <main style={{ paddingBlockStart: "2.281em", overflowX: "hidden" }}>
      <FieldQuestion />
      <SupportMessage />
    </main>
  )
};

export default QuestionPage;
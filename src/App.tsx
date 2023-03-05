import React from "react";
import FieldQuestion from "./components/Form/FieldQuestion";
import Header from "./components/Header";
import QuestionPage from "./pages/QuestionPage";

function App () {
  return (
    <React.Fragment>
      <Header />
      <QuestionPage />
    </React.Fragment>
  )
}

export default App;
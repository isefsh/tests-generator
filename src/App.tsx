import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";

function App () {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter >
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/question" element={<QuestionPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
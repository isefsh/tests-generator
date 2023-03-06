import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { TestProvider } from "./context/TestContext";

function App () {
  return (
    <TestProvider>
      <Header />
      <Outlet />
    </TestProvider>
  )
}

export default App;
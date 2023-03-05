import React from "react";
import Button from "./components/UI/Button";

function App () {
  return (
    <Button buttonLabel="Iniciar" buttonType="button" onClick={() => console.log("Alô")} testState={false} />
  )
}

export default App;
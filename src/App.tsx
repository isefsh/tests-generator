import React from "react"
import ButtonTheme from "./components/ButtonTheme"

function App () {
  const [theme, setTheme] = React.useState<string>("");
  console.log(theme);
  return (
    <ButtonTheme themeFullName="Desenvolvimento Web" themeAcronym="Web" setTheme={setTheme} />
  )
}

export default App;
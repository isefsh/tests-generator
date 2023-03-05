import React from "react";
import InputName from "../components/Form/InputName";
import Button from "../components/UI/Button";
import ButtonTheme from "../components/UI/ButtonTheme";
import Description from "../components/UI/Description";
import SupportMessage from "../components/UI/SupportMessage";
import { StyledHomePageForm, StyledHomePageSection, ThemesWrapper } from "./styles";

const availableThemes = [
  {
    themeFullName: "Interação Humano Computador",
    themeAcronym: "IHC",
  },
  {
    themeFullName: "Desenvolvimento Web",
    themeAcronym: "Web",
  },
  {
    themeFullName: "Gestão Ágil de Projetos de Software",
    themeAcronym: "GAPS",
  },
];

const HomePage = () => {
  const studentName = React.useRef<HTMLInputElement>(null);
  const [theme, setTheme] = React.useState<string>("");

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (studentName.current!.value.length <= 0 || theme.length <= 0) {
      alert("Verifique se seu nome está preenchido e se escolheu um tema!");
      return null;
    }

    return localStorage.setItem("testData", JSON.stringify({
      studentName: studentName.current?.value,
      choosenTheme: theme,
    }));
  }

  return (
    <StyledHomePageSection id="mainTheme">
      <Description />
      <StyledHomePageForm onSubmit={onSubmitHandler}>
        <InputName reference={studentName} />
        <ThemesWrapper>
          {
            availableThemes.map((theme, index) => (
              <ButtonTheme key={`testTheme-${index}`} themeFullName={theme.themeFullName} themeAcronym={theme.themeAcronym} setTheme={setTheme} />
            ))
          }
        </ThemesWrapper>
        <Button buttonType="submit" buttonLabel="Iniciar" testState={false} />
      </StyledHomePageForm>
      <SupportMessage />
    </StyledHomePageSection>
  )
};

export default HomePage;
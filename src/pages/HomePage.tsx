import React from "react";
import { useNavigate } from "react-router-dom";
import { createArrayRandom } from "../assets/functions/createArrayRandom";
import { db } from "../assets/functions/db";
import InputName from "../components/Form/InputName";
import Button from "../components/UI/Button";
import ButtonTheme from "../components/UI/ButtonTheme";
import Description from "../components/UI/Description";
import SupportMessage from "../components/UI/SupportMessage";
import { TestContext } from "../context/TestContext";
import { StyledHomePageForm, StyledHomePageSection, ThemesWrapper } from "./styles";

const themes = db.themes;

const HomePage = () => {
  const toNavigate = useNavigate();
  const { saveTestData } = React.useContext(TestContext);
  const studentName = React.useRef<HTMLInputElement>(null);
  const [indexTheme, setIndexTheme] = React.useState<number | null>(null);

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (studentName.current!.value.length > 0 && indexTheme! >= 0) {
      const theme = {
        id: themes[indexTheme!].id,
        abbrTheme: themes[indexTheme!].abbrTheme,
        name: themes[indexTheme!].name,
      };
      
      const list = createArrayRandom.createArray(theme.abbrTheme);
      const listObject = { questions: list, theme: theme };
      const testData = Object.assign({
        studentName: studentName.current?.value,
        choosenTheme: indexTheme!
      }, listObject);
      saveTestData(testData);
      localStorage.setItem("testData", JSON.stringify(testData));
      toNavigate("/question");
    }

    return null;
  }

  return (
    <StyledHomePageSection id="mainTheme">
      <Description />
      <StyledHomePageForm onSubmit={onSubmitHandler}>
        <InputName reference={studentName} />
        <ThemesWrapper>
          {
            themes.map((theme, index) => (
              <ButtonTheme key={`testTheme-${index}`} themeFullName={theme.name} themeAcronym={theme.abbrTheme} themeIndexValue={index} setTheme={setIndexTheme} />
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
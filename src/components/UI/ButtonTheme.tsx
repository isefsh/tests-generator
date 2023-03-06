import React, { SetStateAction } from "react";
import LineDetail from "./LineDetail";
import { StyledButtonTheme } from "./styles";

interface ButtonThemeProps {
  themeFullName: string;
  themeAcronym: string;
  themeIndexValue: number;
  setTheme: React.Dispatch<SetStateAction<number | null>>;
}

const ButtonTheme = (props: ButtonThemeProps) => {
  return (
    <StyledButtonTheme
      themeAcronym={props.themeAcronym.toLocaleUpperCase()}
      onClick={() => props.setTheme(props.themeIndexValue)}
      value={props.themeIndexValue}
    >
      <h3>{props.themeFullName}</h3>
      <div>
        <hgroup>
          <h1
            style={{ display: "block", color: "#3B3B3B", fontSize: "4.375rem" }}
          >
            {props.themeAcronym}
          </h1>
        </hgroup>
        <LineDetail isQuestionPage={false} />
      </div>
    </StyledButtonTheme>
  );
};

export default ButtonTheme;
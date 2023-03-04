import React, { SetStateAction } from "react";
import { StyledButtonTheme } from "./styles";

interface ButtonThemeProps {
  themeFullName: string,
  themeAcronym: string,
  setTheme: React.Dispatch<SetStateAction<string>>
}

const ButtonTheme = (props: ButtonThemeProps) => {
  return (
    <StyledButtonTheme themeAcronym={props.themeAcronym.toLocaleUpperCase()} onClick={() => props.setTheme(props.themeAcronym)}>
      <h3>{props.themeFullName}</h3>
      <div>
        <hgroup>
          <h1 style={{ display: "block", color: "#3B3B3B", fontSize: "4.375rem" }}>{props.themeAcronym}</h1>
        </hgroup>
        <div style={{ display: "flex", columnGap: ".563rem" }}>
          <span className="firstUnderscore" />
          <span className="secondUnderscore" />
        </div>
      </div>
    </StyledButtonTheme>
  )
};

export default ButtonTheme;
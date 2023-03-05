import React from "react";
import { StyledFinalLine, StyledHeader, StyledLine } from "./styles";
import SuricatoLogo from "../../assets/imgs/suricato-logo.svg";

const Header = () => {
  return (
    <React.Fragment>
      <StyledLine />
      <StyledHeader>
          <img src={SuricatoLogo} alt="Suricato's Logo" />
          <hgroup>
            <h1>Suricato</h1>
            <p>Seu conhecimento em prova.</p>
          </hgroup>
      </StyledHeader>
      <StyledFinalLine />
    </React.Fragment>
  );
};

export default Header;
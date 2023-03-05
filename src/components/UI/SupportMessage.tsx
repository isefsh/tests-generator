import {
  StyledSupportFooter,
  StyledSupportMessage,
  StyledSupportWrapper,
} from "./styles";
import SuricatoImage from "../../assets/imgs/suricato-img.svg";
import React from "react";

const SupportMessage = () => {
  return (
    <React.Fragment>
      <StyledSupportMessage>
        <StyledSupportWrapper>
          <hgroup>
            <h1>Acreditamos em você!</h1>
            <p>
              A equipe Suricato acredita em você, pequeno Suricato! Se não tiver
              um bom score, recomece!
            </p>
          </hgroup>
          <img src={SuricatoImage} alt="Supporting Image" />
        </StyledSupportWrapper>
      </StyledSupportMessage>
      <StyledSupportFooter>
        <li>Home</li>
        <li>Suricato Copyright</li>
        <li>Ir para o topo</li>
      </StyledSupportFooter>
    </React.Fragment>
  );
};

export default SupportMessage;

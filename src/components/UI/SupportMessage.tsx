import {
  StyledSupportFooter,
  StyledSupportMessage,
  StyledSupportText,
  StyledSupportWrapper,
} from "./styles";
import SuricatoImage from "../../assets/imgs/suricato-img.svg";
import React from "react";

const SupportMessage = () => {
  return (
    <React.Fragment>
      <StyledSupportMessage>
        <StyledSupportWrapper>
          <StyledSupportText>
            <h1>Acreditamos em você!</h1>
            <div style={{ display: "flex", columnGap: ".563rem" }}>
              <span className="firstUnderscore" />
              <span className="secondUnderscore" />
            </div>
            <p>
              A equipe Suricato acredita em você, pequeno Suricato! Se não tiver
              um bom score, recomece!
            </p>
          </StyledSupportText>
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

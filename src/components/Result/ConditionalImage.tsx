import React from "react";
import { StyledImage } from "./styles";
import GreatSuricato from "../../assets/imgs/suricato-feliz.png";
import BadSuricato from "../../assets/imgs/suricato-culto.svg";

interface ScoreProps {
  score: number,
}

const ConditionalImage = (props: ScoreProps) => {
  return props.score >= 6 ? (
    <StyledImage>
      <h1>Parabéns, Suricato!</h1>
      <img src={GreatSuricato} alt="Congratulations!" />
      <p>Suricato feliz ;)</p>
    </StyledImage>
  ) : (
    <StyledImage>
      <hgroup>
        <h1>Tente de novo, Suricato!</h1>
        <h3>Veja esse suricato fofo para te dar motivação!</h3>
      </hgroup>
      <img src={BadSuricato} alt="Try again! Good luck ;)" />
      <p>Suricato culto</p>
    </StyledImage>
  )
};

export default ConditionalImage;
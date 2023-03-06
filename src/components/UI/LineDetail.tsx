import React from "react";
import { StyledLineDetail } from "./styles";

interface LineDetailProps {
  isQuestionPage: boolean,
}

const LineDetail = (props: LineDetailProps) => {
  return (
    <StyledLineDetail isQuestionPage={props.isQuestionPage}>
      <span className="firstUnderscore" />
      <span className="secondUnderscore" />
    </StyledLineDetail>
  )
};

export default LineDetail;
import styled from "styled-components";

export const StyledInputNameWrapper = styled.div`
  width: 31.25rem;
  display: flex;
  flex-direction: column;
  row-gap: .625rem;
`;

export const StyledLabelInputName = styled.div`
  display: flex;
  align-items: center;

  & span {
    position: relative;
    width: 4.125rem;
    height: 1.375rem;
    background-color: #ffd600;
    border-radius: 10px;
  }

  & label {
    position: absolute;
    font-size: 1.25rem;
    color: #6A3709;
    padding-inline-start: .625rem;
    padding-block-end: .25rem;
  }
`;

export const StyledInputName = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3.438rem;

  & span {
    position: relative;
    width: 12.875rem;
    height: 3.5rem;
    background-color: #ffd600;
    border-radius: 10px;
  }

  & input {
    position: absolute;
    width: 22.625rem;
    padding-block: 1rem;
    padding-inline: 1.375rem;
    background-color: #F6F6F6;
    border-radius: 10px;
    border: none;
    margin-top: .25rem;
    margin-left: .313rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
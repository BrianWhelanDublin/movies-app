import React from "react";
import { StyledResultsWrapper } from "./ResultsWrapper.styles";

interface ResultsWrapperProps {
  children: React.ReactNode;
}

const ResultsWrapper: React.FC<ResultsWrapperProps> = ({ children }) => {
  return <StyledResultsWrapper>{children}</StyledResultsWrapper>;
};

export default ResultsWrapper;

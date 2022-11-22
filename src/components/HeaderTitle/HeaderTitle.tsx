import React from "react";
import { StyledHeaderTitle } from "./HeaderTitle.styles";

interface HeaderTitleProps {
  children: React.ReactNode;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ children }) => {
  return <StyledHeaderTitle>{children}</StyledHeaderTitle>;
};

export default HeaderTitle;

import React from "react";
import { StyledHeaderWrapper } from "./HeaderWrapper.styles";

interface HeaderWrapperProps {
  children: React.ReactNode;
  background: string;
}

const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ children, background }) => {
  return <StyledHeaderWrapper background={background}>{children}</StyledHeaderWrapper>;
};

export default HeaderWrapper;

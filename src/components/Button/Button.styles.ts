import styled from "styled-components";
import { device } from "../../styles/breakpoints";

import { DefaultStyleProps } from "../../types/types";

interface StyledButtonProps extends DefaultStyleProps {
  href?: string;
  varient?: "filled" | "outline";
}

export const StyledButton = styled.button<StyledButtonProps>`
  border: 1px solid ${(props) => props.theme.colors.white};
  padding: 4px 8px;
  border-radius: 8px;
  transition: all 0.2s ease-in;
  font-size: 12px;
  background-color: ${(props) => (props.varient === "filled" ? props.theme.colors.white : "rgba(0,0,0,.4)")};
  color: ${(props) => (props.varient === "filled" ? props.theme.colors.black : props.theme.colors.white)};

  @media (${device.sm}) {
    padding: 10px 20px;
    font-size: 16px;
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.brand1};
  }
`;

export const StyledLinkButton = styled(StyledButton).attrs({ as: "a" })``;

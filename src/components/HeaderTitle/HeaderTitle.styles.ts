import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { DefaultStyleProps } from "../../types/types";

export const StyledHeaderTitle = styled.h1<DefaultStyleProps>`
  font-size: 28px;
  text-transform: uppercase;
  letter-spacing: 10px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-bottom: 20px;
  /* word-break: break-all; */

  max-width: 1200px;

  @media (${device.sm}) {
    font-size: 48px;
    margin-bottom: 10px;
  }

  @media (${device.md}) {
    font-size: 66px;
    margin-bottom: 30px;
  }
`;

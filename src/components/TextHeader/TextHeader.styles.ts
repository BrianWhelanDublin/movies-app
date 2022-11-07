import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { DefaultStyleProps } from "../../types/types";

export const TextHeaderWrapper = styled.section<DefaultStyleProps>`
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.colors.background};
`;

export const TextHeaderHeading = styled.h1<DefaultStyleProps>`
  padding: 120px 7.5% 10% 7.5%;
  text-align: center;
  font-size: 28px;
  letter-spacing: 10px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  @media (${device.md}) {
    padding: 140px 7.5% 10% 7.5%;
    font-size: 38px;
  }
`;

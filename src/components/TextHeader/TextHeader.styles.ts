import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { DefaultStyleProps } from "../../types/types";

export const TextHeaderWrapper = styled.section<DefaultStyleProps>`
  background: ${(props) => props.theme.colors.background};
`;

export const TextHeaderHeading = styled.h1<DefaultStyleProps>`
  padding: 80px 7.5% 20px 7.5%;
  text-align: center;
  font-size: 22px;
  letter-spacing: 10px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  height: 180px;
  /* position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 12; */
  background-color: black;

  @media (${device.sm}) {
    padding: 140px 7.5% 120px 7.5%;
    font-size: 38px;
  }
`;

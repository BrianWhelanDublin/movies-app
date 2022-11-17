import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { DefaultStyleProps } from "../../types/types";

export const ResultsContainer = styled.div<DefaultStyleProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 5%;
  position: relative;

  @media (${device.sm}) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 0;

    padding: 0 5%;
  }
  @media (${device.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (${device.lg}) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (${device.xl}) {
    grid-template-columns: repeat(6, 1fr);
  }
  /* @media (${device.xxl}) {
    grid-template-columns: repeat(7, 1fr);
  } */
`;

export const ResultsScrollContainer = styled.div<DefaultStyleProps>`
  max-height: calc(100vh - 180px);
  overflow-y: scroll;
  scroll-behavior: smooth;
  @media (${device.sm}) {
    max-height: calc(100vh - 280px);
  }
`;

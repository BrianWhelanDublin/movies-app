import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { DefaultStyleProps } from "../../types/types";

interface HeroWrapperProps extends DefaultStyleProps {
  background: string;
}

export const HeroWrapper = styled.section<HeroWrapperProps>`
  background: url(${(props) => props.background});
  background-repeat: none;
  background-size: cover;
  width: 100vw;
  min-height: 500px;
  height: 75vh;

  position: relative;
  display: flex;
  justify-content: color-interpolation-filters;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    background: ${(props) => props.theme.gradient};
  }

  @media (${device.sm}) {
    height: 80vh;
    min-height: 600px;
  }
`;

export const HeroContent = styled.div<DefaultStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 5%;
  position: relative;
  z-index: 2;
`;

export const HeroSubtitle = styled.p<DefaultStyleProps>`
  color: ${(props) => props.theme.colors.brand1};
  text-transform: uppercase;
  font-weight: 700;
  @media (${device.sm}) {
    font-size: 20px;
  }
`;

export const HeroTitle = styled.h1<DefaultStyleProps>`
  font-size: 28px;
  text-transform: uppercase;
  letter-spacing: 10px;
  font-weight: ${(props) => props.theme.fontWeights.regular};
  margin-bottom: 20px;
  /* word-break: break-all; */
  font-weight: 500;
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

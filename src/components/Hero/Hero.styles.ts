import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { DefaultStyleProps } from "../../types/types";

export const HeroContent = styled.div<DefaultStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 7.5%;
  position: relative;
  z-index: 2;
`;

export const HeroSubtitle = styled.p<DefaultStyleProps>`
  color: ${(props) => props.theme.colors.brand1};
  text-transform: uppercase;
  font-weight: ${(props) => props.theme.fontWeights.extrabold};
  margin-bottom: 0;
  @media (${device.sm}) {
    font-size: 20px;
  }
`;

// export const HeroTitle = styled.h1<DefaultStyleProps>`
//   font-size: 28px;
//   text-transform: uppercase;
//   letter-spacing: 10px;
//   font-weight: ${(props) => props.theme.fontWeights.bold};
//   margin-bottom: 20px;
//   /* word-break: break-all; */

//   max-width: 1200px;

//   @media (${device.sm}) {
//     font-size: 48px;
//     margin-bottom: 10px;
//   }

//   @media (${device.md}) {
//     font-size: 66px;
//     margin-bottom: 30px;
//   }
// `;

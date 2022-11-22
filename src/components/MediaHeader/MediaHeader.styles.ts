import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { DefaultStyleProps } from "../../types/types";

export const MediaHeaderContent = styled.div<DefaultStyleProps>`
  padding: 100px 20px;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1800px;
  margin: 0 auto;

  @media (${device.sm}) {
    flex-direction: row;
    /* align-items: flex-start; */
    /* padding: 180px 20px; */
    justify-content: space-between;
  }
`;

export const MediaHeaderPoster = styled.div<DefaultStyleProps>`
  img {
    max-width: 180px;
    @media (${device.sm}) {
      max-width: 220px;
      display: block;
      margin: 0 auto;
    }
    @media (${device.lg}) {
      max-width: 280px;
    }
  }
  margin-bottom: 40px;

  @media (${device.sm}) {
    flex-basis: 40%;
    margin-bottom: 0;
  }
`;

export const MediaHeaderText = styled.div<DefaultStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  p {
    @media (${device.sm}) {
      font-size: 20px;
      max-width: 800px;
    }
  }

  @media (${device.sm}) {
    flex-basis: 60%;
    text-align: left;
    align-items: flex-start;
  }
`;

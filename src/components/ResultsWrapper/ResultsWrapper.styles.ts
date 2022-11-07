import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { DefaultStyleProps } from "../../types/types";

export const StyledResultsWrapper = styled.section<DefaultStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto 20px auto;

  & div:first-child {
    @media (${device.sm}) {
      flex-basis: 25%;
    }
  }

  @media (${device.sm}) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

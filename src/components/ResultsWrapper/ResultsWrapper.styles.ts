import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { DefaultStyleProps } from "../../types/types";

export const StyledResultsWrapper = styled.section<DefaultStyleProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  & div:first-child {
    @media (${device.sm}) {
      flex-basis: 25%;
    }
  }

  @media (${device.sm}) {
    flex-direction: row;
  }
`;

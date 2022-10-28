import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { DefaultStyleProps } from "../../types/types";

export const StyledGenresList = styled.ul<DefaultStyleProps>`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 250px;

  @media (${device.sm}) {
    width: 80%;
  }
`;

export const StyledGenresItem = styled.li<DefaultStyleProps>`
  font-size: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-right: 16px;
  position: relative;
  font-weight: 400;
  &:not(:last-child) {
    &:after {
      content: "";
      height: 3px;
      width: 3px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      right: -10px;
      background: ${(props) => props.theme.colors.white};
    }
  }

  @media (${device.md}) {
    font-size: 20px;
  }
`;

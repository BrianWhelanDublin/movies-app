import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { DefaultStyleProps } from "../../types/types";

export const MediaInfoList = styled.ul<DefaultStyleProps>`
  display: flex;
  flex-direction: row;
  width: 200px;
  justify-content: space-between;
  font-size: 14px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  list-style: none;
  font-weight: 400;
  @media (${device.md}) {
    font-size: 18px;
  }
`;

export const MediaInfoListItem = styled.li<DefaultStyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    margin-right: 4px;
  }
`;

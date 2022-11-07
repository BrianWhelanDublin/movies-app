import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { DefaultStyleProps } from "../../types/types";

export const StyledGenresSelect = styled.select<DefaultStyleProps>`
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.colors.white};
  padding: 8px;
  border-radius: 8px;
  margin-top: 24px;
  width: 300px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='32' viewBox='0 0 32 32' width='32' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;

  @media (${device.sm}) {
    display: none;
  }
`;

export const GenrePageList = styled.ul<DefaultStyleProps>`
  display: none;
  @media (${device.sm}) {
    display: block;
    padding: 0 0 0 40px;
    list-style: none;
  }
`;

export const GenreLink = styled.li<DefaultStyleProps>`
  font-size: 18px;
  margin: 8px 0;
  letter-spacing: 2px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.grey1};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.white};
    transform: scale(1.01);
  }
`;

import styled, { css } from "styled-components";
import { device } from "../../styles/breakpoints";
import { DefaultStyleProps } from "../../types/types";

export const StyledNav = styled.nav<DefaultStyleProps>`
  background: linear-gradient(${(props) => props.theme.colors.black}, transparent);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: row;
  padding: 20px 40px;

  @media (${device.sm}) {
    padding: 40px;
  }
`;

export const NavList = styled.ul<DefaultStyleProps>`
  display: flex;
  flex-direction: row;
  max-width: 500px;
  margin: 0 auto;
  /* padding: 20px 40px; */
  align-items: center;
  justify-content: space-between;

  @media (${device.sm}) {
    /* padding: 40px; */
  }
`;

const ItemStyle = css`
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: 14px;
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.white};
  padding: 4px 12px;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  margin: 0 16px;
  @media (${device.sm}) {
    font-size: 16px;
    padding: 8px 18px;
  }

  a {
    transition: all 0.2s ease-in-out;
  }

  &:hover,
  &.current {
    border-color: ${(props) => props.theme.colors.brand1};
  }
`;

export const NavItem = styled.li<DefaultStyleProps>`
  ${ItemStyle}
`;

export const Logo = styled.div<DefaultStyleProps>`
  ${ItemStyle}
`;

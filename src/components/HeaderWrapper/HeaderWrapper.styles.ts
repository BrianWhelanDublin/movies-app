import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { DefaultStyleProps } from "../../types/types";

interface HeaderWrapperProps extends DefaultStyleProps {
  background: string;
}

export const StyledHeaderWrapper = styled.section<HeaderWrapperProps>`
  background: url(${(props) => props.background});
  background-repeat: none;
  background-size: cover;
  width: 100vw;
  min-height: 65vh;
  /* height: 65vh; */

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
    min-height: 80vh;
  }
`;

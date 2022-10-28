import styled from "styled-components";
import { DefaultStyleProps } from "../../types/types";

export const LoadingWrapper = styled.div<DefaultStyleProps>`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingDots = styled.div<DefaultStyleProps>`
  position: relative;
  left: -9999px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
  animation: dotPulse 1.5s infinite linear;
  animation-delay: 0.25s;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.white};
  }

  &::before {
    animation: dotPulseBefore 1.5s infinite linear;
    animation-delay: 0s;
  }

  &::after {
    animation: dotPulseAfter 1.5s infinite linear;
    animation-delay: 0.5s;
  }

  @keyframes dotPulseBefore {
    0% {
      box-shadow: 9984px 0 0 -5px ${(props) => props.theme.colors.white};
    }
    30% {
      box-shadow: 9984px 0 0 2px ${(props) => props.theme.colors.white};
    }
    60%,
    100% {
      box-shadow: 9984px 0 0 -5px ${(props) => props.theme.colors.white};
    }
  }

  @keyframes dotPulse {
    0% {
      box-shadow: 9999px 0 0 -5px ${(props) => props.theme.colors.white};
    }
    30% {
      box-shadow: 9999px 0 0 2px ${(props) => props.theme.colors.white};
    }
    60%,
    100% {
      box-shadow: 9999px 0 0 -5px ${(props) => props.theme.colors.white};
    }
  }

  @keyframes dotPulseAfter {
    0% {
      box-shadow: 10014px 0 0 -5px ${(props) => props.theme.colors.white};
    }
    30% {
      box-shadow: 10014px 0 0 2px ${(props) => props.theme.colors.white};
    }
    60%,
    100% {
      box-shadow: 10014px 0 0 -5px ${(props) => props.theme.colors.white};
    }
  }
`;

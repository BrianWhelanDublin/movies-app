import styled from "styled-components";
import { DefaultStyleProps } from "../../types/types";

export const StyledCard = styled.a<DefaultStyleProps>`
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
  max-width: 220px;
  display: block;
  height: 100%;

  img {
    width: 100%;
    border-radius: 5px;
    z-index: -1;
    min-height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

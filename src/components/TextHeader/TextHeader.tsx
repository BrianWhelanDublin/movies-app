import React from "react";
import { TextHeaderHeading, TextHeaderWrapper } from "./TextHeader.styles";

interface TextHeaderProps {
  title: string;
}

const TextHeader: React.FC<TextHeaderProps> = ({ title }) => {
  return (
    <TextHeaderWrapper>
      <TextHeaderHeading>{title}</TextHeaderHeading>
    </TextHeaderWrapper>
  );
};

export default TextHeader;

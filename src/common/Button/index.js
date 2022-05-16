import { StyledButton } from "./styled";

export const Button = ({ onButtonClick, content }) => {
  return <StyledButton onClick={onButtonClick}>{content}</StyledButton>;
};

import { StyledButton } from "./styled";

export const Button = ({ onButtonClick, content, isDisabled }) => {
  return (
    <StyledButton onClick={onButtonClick} disabled={isDisabled}>
      {content}
    </StyledButton>
  );
};

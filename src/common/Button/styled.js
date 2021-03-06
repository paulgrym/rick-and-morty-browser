import styled from "styled-components";

export const StyledButton = styled.button`
  text-decoration: none;
  width: 100%;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.button};
  border: 2px solid ${({ theme }) => theme.colors.buttonBorder};
  background: inherit;
  border-radius: 5px;
  margin-top: 8px;
  transition: 0.4s;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.button};
    cursor: pointer;
  }

  &:active {
    filter: brightness(120%);
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.buttonDisabledText};
    background-color: ${({ theme }) => theme.colors.buttonDisabledBackground};
    border-color: ${({ theme }) => theme.colors.buttonDisabledText};
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 12px;
  }
`;

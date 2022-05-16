import styled from "styled-components";

export const StyledButton = styled.button`
  text-decoration: none;
  display: inline-block;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.button};
  border: 2px solid ${({ theme }) => theme.colors.button};
  border-radius: 5px;
  margin-top: 16px;
  transition: 0.7s;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.button};
    cursor: pointer;
  }

  &:active {
    filter: brightness(120%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 12px;
  }
`;

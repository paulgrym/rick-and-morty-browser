import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  margin: 120px auto 24px;
  width: 91px;
  height: 91px;
  border: 12px solid ${({ theme }) => theme.colors.loader};
  border-right-color: ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  animation: ${rotate} 1.2s linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: 60px auto 24px;
    width: 70px;
    height: 70px;
    border-width: 9px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 24px auto 16px;
    width: 35px;
    height: 35px;
    border-width: 5px;
  }
`;

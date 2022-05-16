import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: 36px;
  line-height: 1.2;
  margin: 56px 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 28px;
    margin: 32px 0 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    text-align: center;
    font-size: 24px;
    margin: 24px 0 8px;
  }
`;

import styled from "styled-components";

export const Section = styled.section`
  max-width: 1104px;
  margin: 20px auto 40px;
  padding: 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 16px auto 24px;
  }
`;

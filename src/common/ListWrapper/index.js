import styled from "styled-components";

export const ListWrapper = styled.ul`
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(174px, 1fr));
  grid-gap: 24px;
  margin: 12px auto 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

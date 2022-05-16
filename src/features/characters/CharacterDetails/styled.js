import styled from "styled-components";

export const Container = styled.div`
  max-width: 650px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    display: flex;
    justify-content: center;
  }
`;

export const Info = styled.article`
  background: ${({ theme }) => theme.colors.white};
  padding: 40px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  margin-bottom: 64px;
  display: flex;
  align-items: flex-start;
  gap: 20px 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 28px;
    margin-bottom: 32px;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  height: 250px;
  aspect-ratio: 0.75;
  border-radius: 5px;
  object-fit: cover;
  object-position: center top;
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    display: flex;
    align-self: center;
  }
`;

export const MetaData = styled.dl`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 8px;
  line-height: 1.5;
`;

export const Term = styled.dt`
  color: ${({ theme }) => theme.colors.term};
  margin-right: 8px;
`;
export const Description = styled.dd`
  margin: 0;
`;

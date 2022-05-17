import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListItem = styled.li`
  text-align: center;
  padding: 16px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  transition: transform 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 200px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  gap: 16px;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  border-radius: 5px;
`;

export const Title = styled.header`
  margin: 0;
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
    font-weight: 500;
  }
`;

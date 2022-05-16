import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 16px;
  }
`;

export const Image = styled.img`
  max-width: 300px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    max-width: 250px;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    max-width: 200px;
    height: auto;
  }
`;

export const Info = styled.h2`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 20px;
  }
`;

export const Message = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 16px;
  }
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  padding: 16px 24px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.button};
  border: 2px solid ${({ theme }) => theme.colors.button};
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
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
    padding: 12px 16px;
    font-size: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 8px 12px;
    font-size: 12px;
  }
`;

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as Rick } from "./rick.svg";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.navigationBackground};
  color: ${({ theme }) => theme.colors.white};
  padding: 20px;
`;

export const Container = styled.div`
  max-width: 1104px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  grid-gap: 16px 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    justify-items: center;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -1.5px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
`;

export const RickIcon = styled(Rick)`
  width: auto;
  height: 30px;
  margin-right: 8px;
  flex-shrink: 0;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 12px 30px;
  padding-left: 0px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    justify-content: center;
  }
`;

export const ListItem = styled.li`
  cursor: pointer;

  &:last-child {
    margin-right: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.5s;
  transition-property: color, border;

  &:hover {
    color: ${({ theme }) => theme.colors.navigationHover};
  }

  &.active {
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  }

  &.active:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.navigationHover};
    color: ${({ theme }) => theme.colors.navigation};
  }
`;

import {
  ListItem,
  List,
  StyledHeader,
  StyledLink,
  StyledNavLink,
  RickIcon,
} from "./styled";

export const Header = () => {
  const onLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <StyledHeader>
      <div onClick={onLogoClick}>
        <StyledLink to={"/characters"}>
          <RickIcon />
          Rick and Morty Browser
        </StyledLink>
      </div>
      <nav>
        <List>
          <ListItem>
            <StyledNavLink to={"/characters"}>Characters</StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to={"/favourite"}>Favourite</StyledNavLink>
          </ListItem>
        </List>
      </nav>
    </StyledHeader>
  );
};

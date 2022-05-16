import {
  ListItem,
  List,
  StyledHeader,
  StyledLink,
  StyledNavLink,
  RickIcon,
  Container,
} from "./styled";

export const Header = () => {
  const onLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <StyledHeader>
      <Container>
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
              <StyledNavLink to={"/favourite-characters"}>
                Favourite
              </StyledNavLink>
            </ListItem>
          </List>
        </nav>
      </Container>
    </StyledHeader>
  );
};

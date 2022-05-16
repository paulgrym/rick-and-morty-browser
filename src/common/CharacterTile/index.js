import { StyledLink, ListItem, Image, Title } from "./styled";

export const CharacterTile = ({ id, name, image }) => {
  return (
    <ListItem>
      <StyledLink to={`/characters/${id}`}>
        <Image src={image} alt="Character portrait" />
        <Title> {name}</Title>
      </StyledLink>
    </ListItem>
  );
};

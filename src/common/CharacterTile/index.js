import { StyledLink, ListItem, Image, Title } from "./styled";
import { Button } from "../Button";

export const CharacterTile = ({
  id,
  name,
  image,
  onButtonClick,
  content,
  isDisabled,
}) => {
  return (
    <ListItem>
      <StyledLink to={`/characters/${id}`}>
        <Image src={image} alt="Character portrait" />
        <Title> {name}</Title>
      </StyledLink>
      <Button
        onButtonClick={onButtonClick}
        content={content}
        isDisabled={isDisabled}
      />
    </ListItem>
  );
};

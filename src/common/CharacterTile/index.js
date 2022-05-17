import { StyledLink, ListItem, Image, Title } from "./styled";
import { Button } from "../Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addCharacterToFavourites,
  removeCharacterFromFavourites,
  selectFavouritesCharacters,
} from "../../features/characters/CharactersList/charactersListSlice";

export const CharacterTile = ({ id, name, image, addButton, character }) => {
  const dispatch = useDispatch();
  const favouriteCharacters = useSelector(selectFavouritesCharacters);

  return (
    <ListItem>
      <StyledLink to={`/characters/${id}`}>
        <Image src={image} alt="Character portrait" />
        <Title> {name}</Title>
      </StyledLink>
      <div>
        {addButton && (
          <Button
            onButtonClick={() => {
              dispatch(addCharacterToFavourites(character));
            }}
            content="Add to favourites"
            isDisabled={favouriteCharacters.map((fav) => fav.id).includes(id)}
          />
        )}
        <Button
          onButtonClick={() => dispatch(removeCharacterFromFavourites(id))}
          content={"Remove from favourites"}
        />
      </div>
    </ListItem>
  );
};

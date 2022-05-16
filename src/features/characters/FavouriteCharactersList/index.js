import { useDispatch, useSelector } from "react-redux";
import { CharacterTile } from "../../../common/CharacterTile";
import { ListWrapper } from "../../../common/ListWrapper";
import { Section } from "../../../common/Section";
import { Title } from "../../../common/Title";
import {
  removeCharacterFromFavourites,
  selectFavouritesCharacters,
} from "../CharactersList/charactersListSlice";

export const FavouriteCharactersList = () => {
  const dispatch = useDispatch();
  const favouriteCharacters = useSelector(selectFavouritesCharacters);

  return (
    <Section>
      <Title>Favourite</Title>
      <ListWrapper>
        {favouriteCharacters.map((character) => (
          <CharacterTile
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            onButtonClick={() =>
              dispatch(removeCharacterFromFavourites(character.id))
            }
            content="Remove from favourites"
          />
        ))}
      </ListWrapper>
    </Section>
  );
};

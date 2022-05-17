import { useSelector } from "react-redux";
import { CharacterTile } from "../../../common/CharacterTile";
import { ListWrapper } from "../../../common/ListWrapper";
import { Section } from "../../../common/Section";
import { Title } from "../../../common/Title";
import { selectFavouritesCharacters } from "../CharactersList/charactersListSlice";

export const FavouriteCharactersList = () => {
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
          />
        ))}
      </ListWrapper>
    </Section>
  );
};

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CharacterTile } from "../../../common/CharacterTile";
import { ListWrapper } from "../../../common/ListWrapper";
import { Section } from "../../../common/Section";
import { StatusChecker } from "../../../common/StatusChecker";
import { Title } from "../../../common/Title";
import {
  addCharacterToFavourites,
  fetchCharactersList,
  selectCharactersList,
  selectCharactersListStatus,
} from "./charactersListSlice";

export const CharactersList = () => {
  const dispatch = useDispatch();
  const characters = useSelector(selectCharactersList);
  const status = useSelector(selectCharactersListStatus);

  useEffect(() => {
    dispatch(fetchCharactersList());
  }, [dispatch]);

  return (
    <Section>
      <StatusChecker status={status}>
        <Title>Characters</Title>
        <ListWrapper>
          {characters.map((character) => (
            <CharacterTile
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              character={character}
              onButtonClick={() =>
                dispatch(addCharacterToFavourites(character))
              }
              content="Add to favourites"
            />
          ))}
        </ListWrapper>
      </StatusChecker>
    </Section>
  );
};

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CharacterTile } from "../../common/CharacterTile";
import { StatusChecker } from "../../common/StatusChecker";
import {
  fetchCharacters,
  selectCharactersList,
  selectCharactersStatus,
} from "./charactersSlice";

export const CharactersPage = () => {
  const dispatch = useDispatch();
  const characters = useSelector(selectCharactersList);
  const status = useSelector(selectCharactersStatus);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);
  console.log(characters);

  return (
    <StatusChecker status={status}>
      <ul>
        {characters.map((character) => (
          <CharacterTile
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </ul>
    </StatusChecker>
  );
};

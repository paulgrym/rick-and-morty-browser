import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </StatusChecker>
  );
};

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

  return status === "success" ? (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>{character.name}</li>
      ))}
    </ul>
  ) : null;
};

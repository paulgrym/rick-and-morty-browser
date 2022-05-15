import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
          <Link key={character.id} to={`/characters/${character.id}`}>
            <li>{character.name}</li>
          </Link>
        ))}
      </ul>
    </StatusChecker>
  );
};

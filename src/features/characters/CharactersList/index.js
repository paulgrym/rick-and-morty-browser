import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CharacterTile } from "../../../common/CharacterTile";
import { ListWrapper } from "../../../common/ListWrapper";
import { Section } from "../../../common/Section";
import { StatusChecker } from "../../../common/StatusChecker";
import { Title } from "../../../common/Title";
import {
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
  console.log(characters);

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
            />
          ))}
        </ListWrapper>
      </StatusChecker>
    </Section>
  );
};
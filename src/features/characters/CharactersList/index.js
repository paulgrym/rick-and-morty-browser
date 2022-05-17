import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CharacterTile } from "../../../common/CharacterTile";
import { ListWrapper } from "../../../common/ListWrapper";
import { Pagination } from "../../../common/Pagination";
import { useQueryParameter } from "../../../common/Pagination/queryParameterHooks";
import { Section } from "../../../common/Section";
import { StatusChecker } from "../../../common/StatusChecker";
import { Title } from "../../../common/Title";
import {
  fetchCharactersList,
  selectCharactersList,
  selectCharactersListStatus,
  selectTotalPages,
} from "../charactersListSlice";

export const CharactersList = () => {
  const dispatch = useDispatch();
  const characters = useSelector(selectCharactersList);
  const status = useSelector(selectCharactersListStatus);
  const totalPages = useSelector(selectTotalPages);

  const paramsPage = +useQueryParameter("page");
  const page = paramsPage === 0 ? 1 : paramsPage;

  useEffect(() => {
    dispatch(fetchCharactersList(page));
  }, [dispatch, page]);

  return (
    <>
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
                addButton
              />
            ))}
          </ListWrapper>
        </StatusChecker>
      </Section>
      {status === "success" && (
        <Pagination totalPages={totalPages} page={page} />
      )}
    </>
  );
};

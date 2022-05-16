import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { StatusChecker } from "../../../common/StatusChecker";
import {
  fetchCharacterDetails,
  selectCharacterDetails,
  selectCharacterDetailsStatus,
} from "./characterDetailsSlice";
import { Image, Info, MetaData, Container, Description, Term } from "./styled";
import { Title } from "../../../common/Title";
import { Section } from "../../../common/Section";
import { nanoid } from "@reduxjs/toolkit";

export const CharacterDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const character = useSelector(selectCharacterDetails);
  const status = useSelector(selectCharacterDetailsStatus);

  useEffect(() => {
    dispatch(fetchCharacterDetails(id));
  }, [id, dispatch]);

  const metaData = [
    { term: "Name", description: character.name },
    { term: "Status", description: character.status },
    { term: "Species", description: character.species },
    { term: "Type", description: character.type },
    { term: "Gender", description: character.gender },
    { term: "Origin", description: character.origin?.name },
    { term: "Location", description: character.location?.name },
  ];

  return (
    <StatusChecker status={status}>
      <Section>
        <Title>{character.name || "unknown"}</Title>
        <Container>
          <Info>
            <Image src={character.image} />
            <div>
              {metaData.map((data) => (
                <MetaData key={nanoid()}>
                  <Term>{data.term}:</Term>
                  <Description>{data.description || "unknown"}</Description>
                </MetaData>
              ))}
            </div>
          </Info>
        </Container>
      </Section>
    </StatusChecker>
  );
};

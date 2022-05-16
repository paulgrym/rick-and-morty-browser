import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { StatusChecker } from "../../../common/StatusChecker";
import {
  fetchCharacterDetails,
  selectCharacterDetails,
  selectCharacterDetailsStatus,
} from "./characterDetailsSlice";

export const CharacterDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const character = useSelector(selectCharacterDetails);
  const status = useSelector(selectCharacterDetailsStatus);

  useEffect(() => {
    dispatch(fetchCharacterDetails(id));
  }, [id, dispatch]);

  return (
    <StatusChecker status={status}>
      <p>Name: {character.name || "Unknown"}</p>
      <p>Status: {character.status || "Unknown"}</p>
      <p>Species: {character.species || "Unknown"}</p>
      <p>Type: {character.type || "Unknown"}</p>
      <p>Gender: {character.gender || "Unknown"}</p>
    </StatusChecker>
  );
};
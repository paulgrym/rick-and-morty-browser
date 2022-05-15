import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCharacterDetails } from "./characterDetailsSlice";

export const CharacterPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCharacterDetails(id));
  }, [id, dispatch]);

  return <>Character {id}</>;
};

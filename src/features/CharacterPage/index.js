import { useParams } from "react-router-dom";

export const CharacterPage = () => {
  // const dispatch = useDispatch();
  const { id } = useParams();

  // useEffect(() => {
  //   dispatch(fetchCharacter(id));
  // }, [id, dispatch]);

  return <>Character {id}</>;
};

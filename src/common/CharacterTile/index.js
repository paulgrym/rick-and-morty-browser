import { Link } from "react-router-dom";

export const CharacterTile = ({ id, name, image }) => {
  return (
    <Link to={`/characters/${id}`}>
      <li>
        <img src={image} alt="Character portrait" /> {name}
      </li>
    </Link>
  );
};

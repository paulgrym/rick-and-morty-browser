import axios from "axios";
import { useEffect, useState } from "react";

export const CharactersPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async (url) => {
      try {
        url = "https://rickandmortyapi.com/api/character/?page=2";

        const response = await axios.get(url);
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error("Sth bad happened", error);
      }
    };
    setTimeout(getData, 300);
  }, []);

  console.log(data);

  return <>test</>;
};

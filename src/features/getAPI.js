import axios from "axios";

export const getAPI = async (url) => {
  const response = await axios.get(url);

  return response.data;
};

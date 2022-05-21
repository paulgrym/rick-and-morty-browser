import { useNavigate, useLocation } from "react-router-dom";

export const useQueryParameter = (key) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  return searchParams.get(key);
};

export const useReplaceQueryParameter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  return (parameters) => {
    parameters.forEach(({ key, value }) => {
      if (value === "") {
        searchParams.delete(key);
      } else {
        searchParams.set(key, value);
      }
    });

    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
  };
};

const localStorageKey = "favourites";

export const saveFavouritesInLocalStorage = (favourites) =>
  localStorage.setItem(localStorageKey, JSON.stringify(favourites));

export const getFavouritesFromLocaleStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || [];

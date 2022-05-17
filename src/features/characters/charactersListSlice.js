import { createSlice } from "@reduxjs/toolkit";
import { getFavouritesFromLocaleStorage } from "./favouritesLocalStorage";

const charactersListSlice = createSlice({
  name: "charactersList",
  initialState: {
    charactersList: [],
    favouriteCharacters: getFavouritesFromLocaleStorage(),
    status: "initial",
    totalPages: null,
  },

  reducers: {
    addCharacterToFavourites: (state, { payload: character }) => {
      state.favouriteCharacters.push(character);
    },

    removeCharacterFromFavourites: (state, { payload: characterId }) => {
      const index = state.favouriteCharacters.findIndex(
        (character) => character.id === characterId
      );
      if (index !== -1) {
        state.favouriteCharacters.splice(index, 1);
      }
    },

    fetchCharactersList: (state) => {
      state.status = "loading";
    },

    fetchCharactersListSuccess: (state, { payload: charactersList }) => {
      state.status = "success";
      state.charactersList = charactersList.results;
      state.totalPages = charactersList.info.pages;
    },

    fetchCharactersListError: (state) => {
      state.status = "error";
    },
  },
});

export const {
  fetchCharactersList,
  fetchCharactersListSuccess,
  fetchCharactersListError,
  addCharacterToFavourites,
  removeCharacterFromFavourites,
  toggleFav,
} = charactersListSlice.actions;

const selectCharacters = (state) => state.charactersList;

export const selectCharactersList = (state) =>
  selectCharacters(state).charactersList;
export const selectFavouritesCharacters = (state) =>
  selectCharacters(state).favouriteCharacters;
export const selectCharactersListStatus = (state) =>
  selectCharacters(state).status;
export const selectTotalPages = (state) => selectCharacters(state).totalPages;

export const charactersListReducer = charactersListSlice.reducer;

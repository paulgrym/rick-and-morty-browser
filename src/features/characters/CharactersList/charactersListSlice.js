import { createSlice } from "@reduxjs/toolkit";

const charactersListSlice = createSlice({
  name: "charactersList",
  initialState: {
    charactersList: [],
    favouriteCharacters: [],
    status: "initial",
  },

  reducers: {
    addCharacterToFavourites: (
      { favouriteCharacters },
      { payload: character }
    ) => {
      favouriteCharacters.push(character);
    },

    removeCharacterFromFavourites: (
      { favouriteCharacters },
      { payload: characterId }
    ) => {
      const index = favouriteCharacters.findIndex(
        (character) => character.id === characterId
      );
      favouriteCharacters.splice(index, 1);
    },

    fetchCharactersList: (state) => {
      state.status = "loading";
    },

    fetchCharactersListSuccess: (state, { payload: charactersList }) => {
      state.status = "success";
      state.charactersList = charactersList.results;
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
} = charactersListSlice.actions;

const selectCharacters = (state) => state.charactersList;

export const selectCharactersList = (state) =>
  selectCharacters(state).charactersList;
export const selectFavouritesCharacters = (state) =>
  selectCharacters(state).favouriteCharacters;
export const selectCharactersListStatus = (state) =>
  selectCharacters(state).status;

export const charactersListReducer = charactersListSlice.reducer;

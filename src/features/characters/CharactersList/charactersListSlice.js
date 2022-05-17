import { createSlice } from "@reduxjs/toolkit";

const charactersListSlice = createSlice({
  name: "charactersList",
  initialState: {
    charactersList: [],
    favouriteCharacters: [],
    status: "initial",
  },

  reducers: {
    addCharacterToFavourites: (state, { payload: character }) => {
      state.favouriteCharacters.push(character);
    },

    removeCharacterFromFavourites: (state, { payload: characterId }) => {
      const index = state.favouriteCharacters.findIndex(
        (character) => character.id === characterId
      );
      state.favouriteCharacters.splice(index, 1);
    },

    fetchCharactersList: (state) => {
      state.status = "loading";
    },

    fetchCharactersListSuccess: (state, { payload: charactersList }) => {
      state.status = "success";
      state.charactersList = charactersList;
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

export const charactersListReducer = charactersListSlice.reducer;

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

    toggleFav: ({ charactersList }, { payload: characterId }) => {
      const index = charactersList.findIndex(
        (character) => character.id === characterId
      );
      charactersList[index].fav = !charactersList[index].fav;
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

// export const selectIsCharacterFav = (state, characterId) =>
//   selectCharactersList(state)[characterId].fav;

export const charactersListReducer = charactersListSlice.reducer;

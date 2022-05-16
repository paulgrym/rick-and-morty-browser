import { createSlice } from "@reduxjs/toolkit";

const charactersListSlice = createSlice({
  name: "charactersList",
  initialState: {
    charactersList: [],
    status: "initial",
  },

  reducers: {
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
} = charactersListSlice.actions;

const selectCharacters = (state) => state.charactersList;

export const selectCharactersList = (state) =>
  selectCharacters(state).charactersList;
export const selectCharactersListStatus = (state) =>
  selectCharacters(state).status;

export const charactersListReducer = charactersListSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    charactersList: [],
    status: "initial",
  },

  reducers: {
    fetchCharacters: (state) => {
      state.status = "loading";
    },

    fetchCharactersSuccess: (state, { payload: characters }) => {
      state.status = "success";
      state.charactersList = characters.results;
    },

    fetchCharactersError: (state) => {
      state.status = "error";
    },
  },
});

export const { fetchCharacters, fetchCharactersSuccess, fetchCharactersError } =
  charactersSlice.actions;

const selectCharacters = (state) => state.characters;

export const selectCharactersList = (state) =>
  selectCharacters(state).charactersList;
export const selectCharactersStatus = (state) => selectCharacters(state).status;

export const charactersReducer = charactersSlice.reducer;

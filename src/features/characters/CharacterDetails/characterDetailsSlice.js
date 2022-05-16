import { createSlice } from "@reduxjs/toolkit";

const characterDetailsSlice = createSlice({
  name: "characterDetails",
  initialState: {
    characterDetails: [],
    status: "initial",
  },

  reducers: {
    fetchCharacterDetails: (state) => {
      state.status = "loading";
    },

    fetchCharacterDetailsSuccess: (state, { payload: characterDetails }) => {
      state.status = "success";
      state.characterDetails = characterDetails;
    },

    fetchCharacterDetailsError: (state) => {
      state.status = "error";
    },
  },
});

export const {
  fetchCharacterDetails,
  fetchCharacterDetailsSuccess,
  fetchCharacterDetailsError,
} = characterDetailsSlice.actions;

const selectCharacter = (state) => state.characterDetails;

export const selectCharacterDetails = (state) =>
  selectCharacter(state).characterDetails;
export const selectCharacterDetailsStatus = (state) =>
  selectCharacter(state).status;

export const characterDetailsReducer = characterDetailsSlice.reducer;

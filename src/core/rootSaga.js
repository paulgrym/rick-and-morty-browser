import { all } from "redux-saga/effects";
import { watchFetchCharacterDetails } from "../features/characters/CharacterDetails/characterDetailsSaga";
import { watchFetchCharactersList } from "../features/characters/charactersListSaga";

export default function* rootSaga() {
  yield all([watchFetchCharactersList(), watchFetchCharacterDetails()]);
}

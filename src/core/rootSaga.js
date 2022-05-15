import { all } from "redux-saga/effects";
import { watchFetchCharacterDetails } from "../features/CharacterPage/characterDetailsSaga";
import { watchFetchCharacters } from "../features/CharactersPage/charactersSaga";

export default function* rootSaga() {
  yield all([watchFetchCharacters(), watchFetchCharacterDetails()]);
}

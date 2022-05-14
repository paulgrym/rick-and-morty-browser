import { all } from "redux-saga/effects";
import { watchFetchCharacters } from "../features/CharactersPage/charactersSaga";

export default function* rootSaga() {
  yield all([watchFetchCharacters()]);
}

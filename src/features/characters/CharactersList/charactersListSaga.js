import {
  delay,
  call,
  put,
  takeLatest,
  takeEvery,
  select,
} from "redux-saga/effects";
import { API_URL } from "../../APIdata";
import { getAPI } from "../../getAPI";
import { saveFavouritesInLocalStorage } from "../favouritesLocalStorage";
import {
  fetchCharactersList,
  fetchCharactersListError,
  fetchCharactersListSuccess,
  selectFavouritesCharacters,
} from "./charactersListSlice";

function* fetchCharactersListWorker() {
  const url = `${API_URL}/?page=1`;
  try {
    yield delay(300);
    const characters = yield call(getAPI, url);
    const results = characters.results;
    yield put(fetchCharactersListSuccess(results));
  } catch (error) {
    yield put(fetchCharactersListError());
  }
}

function* saveFavouritesInLocalStorageHandler() {
  const favourites = yield select(selectFavouritesCharacters);
  yield call(saveFavouritesInLocalStorage, favourites);
}

export function* watchFetchCharactersList() {
  yield takeLatest(fetchCharactersList.type, fetchCharactersListWorker);
  yield takeEvery("*", saveFavouritesInLocalStorageHandler);
}

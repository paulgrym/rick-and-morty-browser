import {
  delay,
  call,
  put,
  takeLatest,
  takeEvery,
  select,
} from "redux-saga/effects";
import { API_URL } from "../APIdata";
import { getAPI } from "../getAPI";
import { saveFavouritesInLocalStorage } from "./favouritesLocalStorage";
import {
  fetchCharactersList,
  fetchCharactersListError,
  fetchCharactersListSuccess,
  selectFavouritesCharacters,
} from "./charactersListSlice";

function* fetchCharactersListWorker({ payload: page }) {
  const url = `${API_URL}/?page=${page}`;
  try {
    yield delay(300);
    const characters = yield call(getAPI, url);
    yield put(fetchCharactersListSuccess(characters));
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

import { delay, call, put, takeLatest } from "redux-saga/effects";
import { API_URL } from "../../APIdata";
import { getAPI } from "../../getAPI";
import {
  fetchCharactersList,
  fetchCharactersListError,
  fetchCharactersListSuccess,
} from "./charactersListSlice";

function* fetchCharactersListWorker() {
  const url = `${API_URL}/?page=2`;
  try {
    yield delay(300);
    const characters = yield call(getAPI, url);
    yield put(fetchCharactersListSuccess(characters));
  } catch (error) {
    yield put(fetchCharactersListError());
  }
}

export function* watchFetchCharactersList() {
  yield takeLatest(fetchCharactersList.type, fetchCharactersListWorker);
}

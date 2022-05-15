import { delay, call, put, takeLatest } from "redux-saga/effects";
import { API_URL } from "../APIdata";
import { getAPI } from "../getAPI";
import {
  fetchCharacters,
  fetchCharactersError,
  fetchCharactersSuccess,
} from "./charactersSlice";

function* fetchCharactersWorker() {
  const url = `${API_URL}/?page=2`;
  try {
    yield delay(300);
    const characters = yield call(getAPI, url);
    yield put(fetchCharactersSuccess(characters));
  } catch (error) {
    yield put(fetchCharactersError());
  }
}

export function* watchFetchCharacters() {
  yield takeLatest(fetchCharacters.type, fetchCharactersWorker);
}

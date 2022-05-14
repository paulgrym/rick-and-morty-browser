import { delay, call, put, takeLatest } from "redux-saga/effects";
import { API_URL } from "../APIdata";
import { getAPI } from "../getAPI";
import {
  fetchCharacters,
  fetchCharactersError,
  fetchCharactersSuccess,
} from "./charactersSlice";

function* fetchCharactersWorker() {
  try {
    yield delay(300);
    const characters = yield call(getAPI, API_URL);
    yield put(fetchCharactersSuccess(characters));
  } catch (error) {
    yield put(fetchCharactersError());
  }
}

export function* watchFetchCharacters() {
  yield takeLatest(fetchCharacters.type, fetchCharactersWorker);
}

import { delay, call, put, takeLatest } from "redux-saga/effects";
import { API_URL } from "../APIdata";
import { getAPI } from "../getAPI";
import {
  fetchCharacterDetails,
  fetchCharacterDetailsError,
  fetchCharacterDetailsSuccess,
} from "./characterDetailsSlice";

function* fetchCharacterDetailsWorker({ payload: id }) {
  const url = `${API_URL}/${id}`;
  try {
    yield delay(300);
    const characterDetails = yield call(getAPI, url);
    yield put(fetchCharacterDetailsSuccess(characterDetails));
  } catch (error) {
    yield put(fetchCharacterDetailsError());
  }
}

export function* watchFetchCharacterDetails() {
  yield takeLatest(fetchCharacterDetails.type, fetchCharacterDetailsWorker);
}

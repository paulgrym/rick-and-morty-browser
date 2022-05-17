import { configureStore } from "@reduxjs/toolkit";
import { charactersListReducer } from "../features/characters/charactersListSlice";
import { characterDetailsReducer } from "../features/characters/CharacterDetails/characterDetailsSlice";
import rootSaga from "./rootSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    charactersList: charactersListReducer,
    characterDetails: characterDetailsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;

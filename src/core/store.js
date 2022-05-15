import { configureStore } from "@reduxjs/toolkit";
import { charactersReducer } from "../features/CharactersPage/charactersSlice";
import { characterDetailsReducer } from "../features/CharacterPage/characterDetailsSlice";
import rootSaga from "./rootSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    characterDetails: characterDetailsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;

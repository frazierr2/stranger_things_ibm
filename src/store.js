import { createStore } from "redux";

import rootReducer from "./Reducers/index";

import * as English from "./Data/en_US.json";
import * as PigLatin from "./Data/la_PG.json";

const initialState = {
  language: "English",
  english: English.default,
  pigLatin: PigLatin.default
};

const store = createStore(
  rootReducer,
  initialState,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

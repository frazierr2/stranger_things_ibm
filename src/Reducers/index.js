import { combineReducers } from "redux";

import language from "./language";
import english from "./english";
import pigLatin from "./pigLatin";

const rootReducer = combineReducers({ language, english, pigLatin });

export default rootReducer;

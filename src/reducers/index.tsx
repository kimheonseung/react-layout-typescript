import { Reducer } from "redux";
import { combineReducers } from "redux";
import themeChanger from "./themes";

const rootReducer: Reducer = combineReducers({
  themeChanger
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
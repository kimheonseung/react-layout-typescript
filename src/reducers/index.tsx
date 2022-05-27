import { combineReducers } from "redux";
import themeChanger from "./themes";

const rootReducer = combineReducers({
  themeChanger
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
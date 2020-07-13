import { combineReducers } from "redux";
import { postReducer } from "./postRed";

export const rootReducer = combineReducers({
    posts: postReducer
});
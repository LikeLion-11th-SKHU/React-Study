import type { Action } from "redux";
import type { AppState } from "./Appstate";
export const rootReducer = (state: AppState, action: Action) => state;

//import {combineReducers} from 'redux'
// export const rootReducer = combineReducers({})
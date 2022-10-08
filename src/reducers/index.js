import { combineReducers } from "redux";

import restaurants from "./restaurants";
import bookmarked from "./bookmarked";
import auth from "./auth";
export const reducers = combineReducers({ restaurants, bookmarked, auth });

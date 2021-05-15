import { combineReducers } from "redux";

import { bankingReducer } from "./bankingReducers";
import { authReducer } from "./authReducers";

export const rootReducer = combineReducers({
    auth: authReducer,
    banking: bankingReducer
})
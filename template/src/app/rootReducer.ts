import {combineReducers} from "redux";
import {rootReducer} from "./rootSlice";

// TODO: SetReducers
export const reducers = combineReducers({
    root: rootReducer,
});

export type RootState = ReturnType<typeof reducers>;
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "./store";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const initialState = {
}

export const rootSlice = createSlice({
    name: 'root',
    initialState: initialState,
    reducers: {
    }
})


const rootPersistConfig = {
    key: 'root',
    version: 1,
    storage: storage,
    whitelist: ['']
};

export const rootActions = rootSlice.actions;

export const rootReducer = persistReducer(rootPersistConfig, rootSlice.reducer);

export const selectRoot = (state: RootState) => state.root;

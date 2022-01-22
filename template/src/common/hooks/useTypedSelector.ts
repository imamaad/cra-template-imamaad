import {TypedUseSelectorHook, useSelector as _useSelector} from "react-redux";
import {RootState} from "app/rootReducer";

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
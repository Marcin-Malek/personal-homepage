import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import githubApi from "./Portfolio/githubApi";
import themeSlice from "./slice";

const store = configureStore({
	reducer: {
		theme: themeSlice,
		[githubApi.reducerPath]: githubApi.reducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;

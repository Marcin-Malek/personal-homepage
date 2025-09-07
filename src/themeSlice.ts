import { createSlice } from "@reduxjs/toolkit";
import { ThemeType } from "./types";
import { RootState } from "./store";

const checkIsDarkSchemePreferred = () => window?.matchMedia?.("(prefers-color-scheme:dark)")?.matches ?? false;

const themeSlice = createSlice({
	name: "theme",
	initialState: checkIsDarkSchemePreferred() ? ThemeType.Dark : ThemeType.Light,
	reducers: {
		toggleDarkTheme(state) {
			return state === ThemeType.Dark ? ThemeType.Light : ThemeType.Dark;
		}
	}
});

export const { toggleDarkTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme;

export default themeSlice.reducer;
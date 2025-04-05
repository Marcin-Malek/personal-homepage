import { createSlice } from "@reduxjs/toolkit";
import { ThemeType } from "./types";
import { RootState } from "./store";


const themeSlice = createSlice({
	name: "theme",
	initialState: ThemeType.Light,
	reducers: {
		toggleDarkTheme(state) {
			return state === ThemeType.Light ? ThemeType.Dark : ThemeType.Light;
		}
	}
});

export const { toggleDarkTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme;

export default themeSlice.reducer;
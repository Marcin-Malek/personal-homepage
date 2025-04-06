import { createSlice } from "@reduxjs/toolkit";
import { ThemeType } from "./types";
import { RootState } from "./store";


const themeSlice = createSlice({
	name: "theme",
	initialState: ThemeType.Initial,
	reducers: {
		toggleDarkTheme(state) {
			return state === ThemeType.Dark ? ThemeType.Light : ThemeType.Dark;
		}
	}
});

export const { toggleDarkTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme;

export default themeSlice.reducer;
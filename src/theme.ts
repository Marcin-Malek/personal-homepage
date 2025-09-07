import { ThemeType } from "./types";

const commonProperties = {
	borderColor: "#D1D5DA4D",
	transition: "1s cubic-bezier(0.69, 0.15, 0.31, 0.85)",
	breakpoints: {
		mobile: 767,
		tablet: 1180
	}
};

const lightTheme = {
	fillColor: {
		background: "#FBFBFB",
		backgroundShade: "#0366D6AA",
		card: "#FFFFFF",
		textPrimary: "#252525",
		textSecondary: "#657486",
		main: "#0366D6",
		themeSwitch: "#E5E5E5"
	},
	shadow: {
		buttonFocus: "2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF",
		buttonClick: "inset 0 2px 0 #14462033"
	},
	...commonProperties
};

const darkTheme = {
	fillColor: {
		background: "#252525",
		backgroundShade: "#2188FF77",
		card: "#363636B8",
		textPrimary: "#FFFFFF",
		textSecondary: "#FFFFFF",
		main: "#2188FF",
		themeSwitch: "#6E6E6E"
	},
	shadow: {
		buttonFocus: "2px -2px 0px #6D93BE, -2px 2px 0px #6D93BE, 2px 2px 0px #6D93BE, -2px -2px 0px #6D93BE",
		buttonClick: "inset 0 2px 0 #14462033"
	},
	...commonProperties
};

export const themeMap = {
	[ThemeType.Light]: lightTheme,
	[ThemeType.Dark]: darkTheme
};
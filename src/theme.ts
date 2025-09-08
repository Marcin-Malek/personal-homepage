import { ThemeType } from "./types";

const commonProperties = {
	borderColor: "#D1D5DA4D",
	transitionEasing: "cubic-bezier(0.69, 0.15, 0.31, 0.85)",
	breakpoints: {
		mobile: 767,
		tablet: 1180
	}
};

const lightTheme = {
	fillColor: {
		background: "#FBFBFB",
		backgroundShade: "#6BA1F1",
		card: "#FFFFFF",
		textPrimary: "#252525",
		textSecondary: "#657486",
		main: "#0366D6",
		themeSwitch: "#E5E5E5"
	},
	shadow: {
		card: "0 16px 7px rgba(9, 10, 51, 0.02)",
		cardHover: "0 16px 16px 12px rgba(9, 10, 51, 0.06)",
		buttonFocus: "2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF",
		buttonClick: "inset 0 2px 0 #14462033"
	},
	...commonProperties
};

const darkTheme = {
	fillColor: {
		background: "#252525",
		backgroundShade: "#8ABDF3",
		card: "#363636B8",
		textPrimary: "#FFFFFF",
		textSecondary: "#FFFFFF",
		main: "#2188FF",
		themeSwitch: "#6E6E6E"
	},
	shadow: {
		card: "0 16px 7px rgba(9, 10, 51, 0.1)",
		cardHover: "0 16px 16px 12px rgba(9, 10, 51, 0.16)",
		buttonFocus: "2px -2px 0px #6D93BE, -2px 2px 0px #6D93BE, 2px 2px 0px #6D93BE, -2px -2px 0px #6D93BE",
		buttonClick: "inset 0 2px 0 #14462033"
	},
	...commonProperties
};

export const themeMap = {
	[ThemeType.Light]: lightTheme,
	[ThemeType.Dark]: darkTheme
};
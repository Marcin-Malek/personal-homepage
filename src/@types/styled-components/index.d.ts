import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		borderColor: string;
		transitionEasing: string;
		breakpoints: {
			mobile: number;
			tablet: number;
		};
		fillColor: {
			background: string;
			backgroundShade: string;
			card: string;
			textPrimary: string;
			textSecondary: string;
			main: string;
			themeSwitch: string;
		}
		shadow: {
			card: string;
			cardHover: string;
			buttonFocus: string;
			buttonClick: string;
		}
	}
}
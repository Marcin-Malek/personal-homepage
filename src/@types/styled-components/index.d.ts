import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		borderColor: string;
		transition: string;
		breakpoints: {
			mobile: number;
			tablet: number;
		};
		fillColor: {
			background: string;
			card: string;
			textPrimary: string;
			textSecondary: string;
			main: string;
			themeSwitch: string;
		}
		shadow: {
			buttonFocus: string;
			buttonClick: string;
		}
	}
}
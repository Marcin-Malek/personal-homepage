import { selectTheme, toggleDarkTheme } from "../../slice";
import { useAppDispatch, useAppSelector } from "../../store";
import { ThemeType } from "../../types";
import {
	Wrapper,
	Label,
	Switch,
	BrightnessIcon
} from "./styled";

const ThemeSwitch = () => {
	const theme = useAppSelector(selectTheme);
	const dispatch = useAppDispatch();

	return (
		<Wrapper>
			<Label>{theme === ThemeType.Light ? "dark mode off" : "dark mode on"}
				<Switch>
					<input
						type="checkbox"
						onChange={() => dispatch(toggleDarkTheme())}
					/>
					<BrightnessIcon
						$themeType={theme}
					/>
				</Switch>
			</Label>
		</Wrapper>
	);
};

export default ThemeSwitch;
import { selectTheme, toggleDarkTheme } from "../../themeSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { ThemeType } from "../../types";
import {
	Wrapper,
	Label,
	Switch,
	BrightnessIcon
} from "./styled";

const ThemeSwitch = () => {
	const themeState = useAppSelector(selectTheme);
	const dispatch = useAppDispatch();

	return (
		<Wrapper>
			<Label>{themeState === ThemeType.Dark ? "dark mode on" : "dark mode off"}
				<Switch>
					<input
						type="checkbox"
						onChange={() => dispatch(toggleDarkTheme())}
					/>
					<BrightnessIcon
						$themeType={themeState}
					/>
				</Switch>
			</Label>
		</Wrapper>
	);
};

export default ThemeSwitch;
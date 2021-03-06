import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleDarkTheme } from "../../slice";
import {
    Wrapper,
    Label,
    Switch,
    BrightnessIcon
} from "./styled";

const ThemeSwitch = () => {
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Label>{theme === "light" ? "dark mode off" : "dark mode on"}
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
}

export default ThemeSwitch;
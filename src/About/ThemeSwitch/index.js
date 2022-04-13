import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleDarkTheme } from "../../slice";
import { Label, Switch } from "./styled";


const ThemeSwitch = () => {
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

    return (
        <Label>dark mode {theme === "light" ? "off" : "on"}
            <Switch type="checkbox" onChange={() => dispatch(toggleDarkTheme())} />
        </Label>
    );
}

export default ThemeSwitch;
import { StyledButton } from "./styled";
import { JSX } from "react";

interface LinkButtonProps {
    link: string;
    img?: JSX.Element;
    text: string;
}

const LinkButton = ({ link, img, text }: LinkButtonProps) => {
	return (
		<StyledButton href={link}>{img}{text}</StyledButton>
	);
};

export default LinkButton;
import { StyledButton } from "./styled";

const LinkButton = ({ link, img, text }) => {
    return (
        <StyledButton href={link}>{img}{text}</StyledButton>
        );
}

export default LinkButton;
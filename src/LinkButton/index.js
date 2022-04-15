import { Icon, StyledButton } from "./styled";

const LinkButton = ({ link, img, text }) => {
    return (
        <StyledButton href={link}>
            <Icon img={img}/>{text}
        </StyledButton>
    );
}

export default LinkButton;
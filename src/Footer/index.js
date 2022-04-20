import { Caption, IconLink, Mail, Text } from "./styled";
import { ReactComponent as GithubIcon} from "../img/github.svg";

const Footer = () => (
    <>
        <Caption>Let's talk!</Caption>
        <Mail href="mailto:marcinmalek01@gmail.com">marcinmalek01@gmail.com</Mail>
        <Text>
            I'm always keen to learn and explore new possibilities.
            If you are looking for a Frontend Developer like me,
            feel free to contact me.
        </Text>
        <IconLink target="_blank" href="https://www.github.com/Marcin-Malek"><GithubIcon /></IconLink>
    </>
);

export default Footer;
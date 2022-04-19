import { ReactComponent as EnvelopeIcon } from "../img/envelope.svg";
import {
    Wrapper,
    Image,
    Caption,
    Header,
    Description,
} from "./styled";
import ThemeSwitch from "./ThemeSwitch";
import LinkButton from "../LinkButton";

const About = () => (
    <Wrapper>
        <Image alt="Marcin Małek" />
        <ThemeSwitch />
        <Caption>I am</Caption>
        <Header>Marcin Małek</Header>
        <Description>An enthusiastic programmer, who is currently looking for new job opportunities.</Description>
        <LinkButton
            link="mailto:marcinmalek01@gmail.com"
            img={<EnvelopeIcon style={{ marginRight: "16px" }} />}
            text="Hire me"
        />
    </Wrapper>
);

export default About;

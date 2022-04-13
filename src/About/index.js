import { Caption, Header, Image, Wrapper } from "./styled";
import ThemeSwitch from "./ThemeSwitch";

const About = () => {
    return (
        <Wrapper>
            <Image alt="Marcin Małek"/>
            <ThemeSwitch />
            <Caption>I am</Caption>
            <Header>Marcin Małek</Header>
        </Wrapper>
    );
}

export default About;

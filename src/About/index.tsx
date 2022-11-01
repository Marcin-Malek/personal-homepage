import { ReactComponent as EnvelopeIcon } from "../img/envelope.svg";
import {
    Wrapper,
    Image,
    Caption,
    Header,
    Description,
} from "./styled";
import { EmojiWrapper, Link } from "../common/styled";
import ThemeSwitch from "./ThemeSwitch";
import LinkButton from "../LinkButton";
import photo from "../img/photo.jpg";

const About = () => (
    <Wrapper>
        <Image src={photo} alt="Marcin Małek" />
        <ThemeSwitch />
        <Caption>I am</Caption>
        <Header>Marcin Małek</Header>
        <Description>
            An enthusiastic programmer,
            who is currently a proud member of software development team at { }
            <Link 
                href="https://ftd.aero/" 
                rel="noopener norefferer"
                target="_blank"
            >
                FTD.aero
            </Link>
            <EmojiWrapper> ✈️</EmojiWrapper>.
        </Description>
        <LinkButton
            link="mailto:marcinmalek01@gmail.com"
            img={<EnvelopeIcon style={{ marginRight: "16px" }} />}
            text="Contact me"
        />
    </Wrapper>
);

export default About;

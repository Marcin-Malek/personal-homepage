import EnvelopeIcon from "../img/envelope.svg?react";
import { Wrapper, Image, Caption, Header, Description } from "./styled";
import ThemeSwitch from "./ThemeSwitch";
import LinkButton from "../LinkButton";
import photo from "../img/photo.jpg";

const About = () => (
	<Wrapper>
		<Image
			src={photo}
			alt="Marcin Małek" />
		<ThemeSwitch />
		<Caption>Hi, I am</Caption>
		<Header>Marcin Małek</Header>
		<Description>
			A passionate software developer, currently exploring new opportunities and working on exciting personal projects.
		</Description>
		<LinkButton
			link="mailto:marcinmalek01@gmail.com"
			img={<EnvelopeIcon style={{ marginRight: "16px" }} />}
			text="Contact me"
		/>
	</Wrapper>
);

export default About;

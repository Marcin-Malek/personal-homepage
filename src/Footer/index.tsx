import { Address, Caption, IconLink, Mail, Text } from "./styled";
import GithubIcon from "../img/github.svg?react";
import LinkedInIcon from "../img/linkedin.svg?react";

const Footer = () => (
	<footer>
		<Caption>Let&apos;s talk!</Caption>
		<Address>
			<Mail href="mailto:marcinmalek01@gmail.com">marcinmalek01@<wbr/>gmail.com</Mail>
			<Text>
                I&apos;m always keen to learn and explore new possibilities.
                If you are looking for a Frontend Developer like me,
                feel free to contact me.
			</Text>
			<IconLink target="_blank" href="https://www.github.com/Marcin-Malek" title="Github"><GithubIcon /></IconLink>
			<IconLink target="_blank" href="https://www.linkedin.com/in/marcin-ma%C5%82ek-4a4a28238/" title="LinkedIn"><LinkedInIcon /></IconLink>
		</Address>
	</footer>
);

export default Footer;
import Content from "./Content";
import {
	Wrapper,
	HeaderIcon,
	Header,
	Caption
} from "./styled";

const Portfolio = () => {
	return (
		<Wrapper>
			<HeaderIcon />
			<Header>Portfolio</Header>
			<Caption>My recent projects</Caption>
			<Content />
		</Wrapper>
	);
};

export default Portfolio;
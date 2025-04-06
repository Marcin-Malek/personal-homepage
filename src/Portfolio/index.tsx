import Content from "./Content";
import {
	Wrapper,
	HeaderIcon,
	Header,
	Caption
} from "./styled";
import useInView from "./useInView";

const Portfolio = () => {
	const [ref, isInView] = useInView<HTMLDivElement>({
		threshold: 0.5
	});
	return (
		<Wrapper ref={ref}>
			<HeaderIcon />
			<Header>Portfolio</Header>
			<Caption>My recent projects</Caption>
			<Content inView={isInView} />
		</Wrapper>
	);
};

export default Portfolio;
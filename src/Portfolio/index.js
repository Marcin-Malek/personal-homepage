import { useDispatch, useSelector } from "react-redux";
import { fetchGithubRepos, selectFetchState, selectGithubRepos } from "../slice";
import Info from "./Info";
import ProgressCircle from "./ProgressCircle";
import LinkButton from "../LinkButton";
import {
    Wrapper,
    HeaderIcon,
    Header,
    Caption,
    PortfolioList,
    StyledWarningIcon,
} from "./styled";
import Card from "./Card";


const Portfolio = () => {
    const dispatch = useDispatch();
    const fetchState = useSelector(selectFetchState);
    const data = useSelector(selectGithubRepos);

    if (!data && fetchState !== "rejected") {
        dispatch(fetchGithubRepos());
    }

    if (fetchState === "pending") {
        return (
            <Wrapper>
                <HeaderIcon />
                <Header>Portfolio</Header>
                <Caption>My recent projects</Caption>
                <Info
                    text="Please wait, projects are being loaded..."
                    additionalElement={<ProgressCircle />}
                />
            </Wrapper>
        );

    } else if (fetchState === "resolved" && data instanceof Array && data.length > 0) {
        return (
            <Wrapper>
                <HeaderIcon />
                <Header>Portfolio</Header>
                <Caption>My recent projects</Caption>
                <PortfolioList>
                    {data.map((item) => (
                        <Card
                            key={item.id}
                            header={item.name}
                            description={item.description}
                            homepage={item.homepage}
                            repository={item.html_url}
                        />
                    ))}
                </PortfolioList>
            </Wrapper>
        );

    } else if (fetchState === "resolved" && data instanceof Array && !data.length > 0) {
        return (
            <Wrapper>
                <HeaderIcon />
                <Header>Portfolio</Header>
                <Caption>My recent projects</Caption>
                <Info
                    header="Sorry! It looks like it's empty..."
                    text="Apparently I dont have any public repositories to show you right now."
                />
            </Wrapper>
        );

    } else {
        return (
            <Wrapper>
                <HeaderIcon />
                <Header>Portfolio</Header>
                <Caption>My recent projects</Caption>
                <Info
                    icon={<StyledWarningIcon />}
                    header="Ooops! Something went wrong... "
                    text={
                        <>
                            Sorry, failed to load Github projects. <br />
                            You can check them directly on Github.
                        </>
                    }
                    additionalElement={
                        <LinkButton
                            link="https://github.com/Marcin-Malek/"
                            text="Go to Github"
                        />
                    }
                />
            </Wrapper>
        );
    }
};

export default Portfolio;
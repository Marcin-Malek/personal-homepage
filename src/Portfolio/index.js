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
    ListItem,
    ItemHeader,
    ItemDescription,
    ItemLink,
    StyledWarningIcon,
} from "./styled";


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

    } else if (fetchState === "resolved" && data instanceof Array) {
        return (
            <Wrapper>
                <HeaderIcon />
                <Header>Portfolio</Header>
                <Caption>My recent projects</Caption>
                <PortfolioList>
                    {data.map((item) => (
                        <ListItem key={item.id}>
                            <ItemHeader>{item.name}</ItemHeader>
                            <ItemDescription>Description it is.</ItemDescription>
                            <ItemLink>Demo: <a href={item.homepage}>{item.homepage}</a></ItemLink>
                            <ItemLink>Code: <a href={item.html_url}>{item.html_url}</a></ItemLink>
                        </ListItem>
                    ))}
                </PortfolioList>
            </Wrapper>
        );

    } else if (fetchState === "rejected" || !(data instanceof Array)) {
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
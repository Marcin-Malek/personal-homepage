import { useSelector } from "react-redux";
import { selectFetchState, selectGithubRepos } from "../../slice";
import Card from "./Card";
import Info from "./Info";
import ProgressCircle from "./ProgressCircle";
import LinkButton from "../../LinkButton";
import { PortfolioList, StyledWarningIcon } from "./styled";

const Content = () => {
    const fetchState = useSelector(selectFetchState);
    const repos = useSelector(selectGithubRepos);

    if (fetchState === "initial") {
        return null;

    } else if (fetchState === "loading") {
        return (
            <Info
                text="Please wait, projects are being loaded..."
                additionalElement={<ProgressCircle />}
            />
        );

    } else if (fetchState === "success" && repos instanceof Array && repos.length > 0) {
        return (
            <PortfolioList>
                {repos.map((repo) => (
                    <Card
                        key={repo.id}
                        header={repo.name}
                        description={repo.description}
                        homepage={repo.homepage}
                        repository={repo.html_url}
                    />
                ))}
            </PortfolioList>
        );

    } else if (fetchState === "success" && repos instanceof Array && !repos.length > 0) {
        return (
            <Info
                header="Sorry! It looks like it's empty..."
                text="Apparently I dont have any public repositories to show you right now."
            />
        );

    } else if (fetchState === "failure") {
        return (
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
        );
    }
    throw new Error(`incorrect state: ${fetchState}`);
}

export default Content;
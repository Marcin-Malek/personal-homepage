import { useAppSelector } from "../../store";
import { selectFetchState, selectGithubRepos } from "../../slice";
import Card from "./Card";
import Info from "./Info";
import ProgressCircle from "./ProgressCircle";
import LinkButton from "../../LinkButton";
import { PortfolioList, StyledWarningIcon } from "./styled";
import { FetchState } from "../../types";

const Content = () => {
	const fetchState = useAppSelector(selectFetchState);
	const repos = useAppSelector(selectGithubRepos);

	if (fetchState === FetchState.Initial) {
		return null;
	} else if (fetchState === FetchState.Loading) {
		return <Info
			text="Please wait, projects are being loaded..."
			additionalElement={<ProgressCircle />} 
		/>;
	} else if (fetchState === FetchState.Success && repos instanceof Array && repos.length > 0) {
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
	} else if (fetchState === FetchState.Success && repos instanceof Array && repos.length <= 0) {
		return (
			<Info
				header="Sorry! It looks like it's empty..."
				text="Apparently I dont have any public repositories to show you right now."
			/>
		);
	} else if (fetchState === FetchState.Failure) {
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
				additionalElement={<LinkButton
					link="https://github.com/Marcin-Malek/"
					text="Go to Github" />}
			/>
		);
	}
	throw new Error(`incorrect state: ${fetchState}`);
};

export default Content;

import { useGetReposQuery } from "../githubApi";

import Card from "./Card";
import Info from "./Info";
import ProgressCircle from "./ProgressCircle";
import LinkButton from "../../LinkButton";

import { PortfolioList, StyledWarningIcon } from "./styled";

const Content = () => {
	const { data: repos, ...restInfo } = useGetReposQuery();

	if (restInfo.isUninitialized) {
		return null;
	} else if (restInfo.isLoading) {
		return <Info
			text="Please wait, projects are being loaded..."
			additionalElement={<ProgressCircle />} 
		/>;
	} else if (restInfo.isSuccess && repos instanceof Array && repos.length > 0) {
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
	} else if (restInfo.isSuccess && repos instanceof Array && repos.length <= 0) {
		return (
			<Info
				header="Sorry! It looks like it's empty..."
				text="Apparently I dont have any public repositories to show you right now."
			/>
		);
	} else if (restInfo.isError) {
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
	throw new Error(`incorrect state: ${{repos, restInfo}}`);
};

export default Content;

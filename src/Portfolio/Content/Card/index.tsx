import { StyledCard, CardHeader, CardDescription, LinkRow, CardLinks, LinkValue } from "./styled";
import { Link } from "../../../common/styled";

interface CardProps {
	header: string
	description: string | null
	homepage: string | null
	repository: string
}

const Card = ({ header, description, homepage, repository }: CardProps) => (
	<StyledCard>
		<CardHeader>{header}</CardHeader>
		{description && <CardDescription>{description}</CardDescription>}
		<CardLinks>
			{(homepage && (
				<LinkRow>
					<dt>Demo:</dt>
					<LinkValue>
						<Link href={homepage}>{homepage}</Link>
					</LinkValue>
				</LinkRow>
			)) || (
				<LinkRow>
					<dt>Demo:</dt>
					<LinkValue>Project has not been deployed.</LinkValue>
				</LinkRow>
			)}
			<LinkRow>
				<dt>Code:</dt>
				<LinkValue>
					<Link href={repository}>{repository}</Link>
				</LinkValue>
			</LinkRow>
		</CardLinks>
	</StyledCard>
);

export default Card;

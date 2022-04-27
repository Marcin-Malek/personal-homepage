import { StyledCard, CardHeader, CardDescription, CardLink } from "./styled";


const Card = ({ header, description, homepage, repository }) => (
    <StyledCard>
        <CardHeader>{header}</CardHeader>
        <CardDescription>{description}</CardDescription>
        {
            (homepage &&
                <CardLink>
                    Demo: <a href={homepage}>{homepage}</a>
                </CardLink>
            ) ||
            <CardLink>
                Demo: Project has not been deployed.
            </CardLink>
        }
        <CardLink>
            Code: <a href={repository}>{repository}</a>
        </CardLink>
    </StyledCard>
);

export default Card;
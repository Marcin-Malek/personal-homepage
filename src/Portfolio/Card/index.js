import { StyledCard, CardHeader, CardDescription, LinkRow, CardLinks, LinkValue } from "./styled";


const Card = ({ header, description, homepage, repository }) => (
    <StyledCard>
        <CardHeader>{header}</CardHeader>
        <CardDescription>{description}</CardDescription>
        <CardLinks>
            {
                (homepage &&
                    <LinkRow>
                        <dt>Demo:</dt>
                        <LinkValue><a href={homepage}>{homepage}</a></LinkValue>
                    </LinkRow>
                ) || (
                    <LinkRow>
                        <dt>Demo:</dt>
                        <LinkValue>Project has not been deployed.</LinkValue>
                    </LinkRow>
                )
            }
            <LinkRow>
                <dt>Code:</dt>
                <LinkValue><a href={repository}>{repository}</a></LinkValue>
            </LinkRow>
        </CardLinks>
    </StyledCard>
);

export default Card;
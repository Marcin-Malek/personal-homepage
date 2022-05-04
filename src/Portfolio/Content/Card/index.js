import {
    StyledCard,
    CardHeader,
    CardDescription,
    LinkRow,
    CardLinks,
    LinkValue,
    Link
} from "./styled";


const Card = ({ header, description, homepage, repository }) => (
    <StyledCard>
        <CardHeader>{header}</CardHeader>
        <CardDescription>{description}</CardDescription>
        <CardLinks>
            {
                (homepage &&
                    <LinkRow>
                        <dt>Demo:</dt>
                        <LinkValue><Link href={homepage}>{homepage}</Link></LinkValue>
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
                <LinkValue><Link href={repository}>{repository}</Link></LinkValue>
            </LinkRow>
        </CardLinks>
    </StyledCard>
);

export default Card;
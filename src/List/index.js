import { ListWrapper, ListHeader, StyledList, ListItem, StyledMarker } from "./styled";

const List = ({ title, titleIcon, content }) => (
    <ListWrapper>
        <ListHeader>{title}{titleIcon}</ListHeader>
        <StyledList>
            {content.map((item, index) => (
                <ListItem key={index}>
                    <StyledMarker />
                    {item}
                </ListItem>
            ))}
        </StyledList>
    </ListWrapper>
);

export default List;
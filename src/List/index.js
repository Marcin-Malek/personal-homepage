import { ListWrapper, ListHeader, StyledList, ListItem, StyledMarker } from "./styled";

const List = ({ title, content }) => (
    <ListWrapper>
        <ListHeader>{title}</ListHeader>
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
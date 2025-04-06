import { ListWrapper, ListHeader, StyledList, ListItem, StyledMarker } from "./styled";
import { JSX } from "react";

interface ListProps {
    title: JSX.Element;
    content: string[];
}

const List = ({ title, content }: ListProps) => (
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
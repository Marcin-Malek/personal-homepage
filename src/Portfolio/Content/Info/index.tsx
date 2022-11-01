import { InfoHeader, InfoText, StyledInfo } from "./styled";

interface InfoProps {
    icon?: JSX.Element;
    header?: string;
    text?: string | JSX.Element;
    additionalElement?: JSX.Element;
}

const Info = ({ icon, header, text, additionalElement }: InfoProps) => {
	return (
		<StyledInfo>
			{icon}
			<InfoHeader>{header}</InfoHeader>
			<InfoText>{text}</InfoText>
			{additionalElement}
		</StyledInfo>
	);
};

export default Info;
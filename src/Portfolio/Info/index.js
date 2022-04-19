import { InfoHeader, InfoText, StyledInfo } from "./styled";

const Info = ({ icon, header, text, additionalElement }) => {
    return (
        <StyledInfo>
            {icon}
            <InfoHeader>{header}</InfoHeader>
            <InfoText>{text}</InfoText>
            {additionalElement}
        </StyledInfo>
    );
}

export default Info;
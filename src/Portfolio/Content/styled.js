import styled from 'styled-components';
import { ReactComponent as WarningIcon } from "../../img/warning.svg";

export const PortfolioList = styled.ul`
    display: grid;
    grid-gap: 32px;
    grid-template-columns: repeat(2, 1fr);
    margin: 24px 0 120px;
    padding: 0;
    text-align: start;
    list-style-type: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        grid-template-columns: 1fr;
        grid-gap: 16px;
    }
`;

export const StyledWarningIcon = styled(WarningIcon)`
    & path {
        stroke: ${({theme}) => theme.fillColor.textPrimary};
    }

    & path:nth-of-type(1) {
        fill: ${({theme}) => theme.fillColor.textPrimary};
    }
`;
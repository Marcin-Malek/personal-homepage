import styled from "styled-components";
import { ReactComponent as GithubIcon } from "../img/github.svg";
import { ReactComponent as WarningIcon } from "../img/warning.svg";

export const Wrapper = styled.section`
    text-align: center;
`;

export const HeaderIcon = styled(GithubIcon)`
    & path {
        fill: ${({ theme }) => theme.fillColor.main};
    }
`;

export const Header = styled.h2`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
    margin: 12px 0 8px;
`;

export const Caption = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin: 0;
`;

export const PortfolioList = styled.ul`
    display: grid;
    grid-gap: 32px;
    grid-template-columns: 1fr 1fr;
    margin: 24px 0 120px;
    padding: 0;
    text-align: start;
`;

export const ListItem = styled.li`
    list-style-type: none;
    background: ${({ theme }) => theme.fillColor.card};
    border: 6px solid ${({ theme }) => theme.borderColor};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    padding: 56px;

    &:hover {
        border-color: #0366D633;
    }
`;

export const ItemHeader = styled.h3`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.fillColor.main};
    margin: 0 0 24px;
`;

export const ItemDescription = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.fillColor.textSecondary};
    margin: 24px 0;
`;

export const ItemLink = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.fillColor.textSecondary};
    margin: 8px 0;
`;

export const StyledWarningIcon = styled(WarningIcon)`
    & path {
        stroke: ${({theme}) => theme.fillColor.textPrimary};
    }

    & path:nth-of-type(1) {
        fill: ${({theme}) => theme.fillColor.textPrimary};
    }
`;
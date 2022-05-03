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

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 32px;
        height: 32px;
    }
`;

export const Header = styled.h2`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
    margin: 12px 0 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 18px;
        line-height: 22px;
    }
`;

export const Caption = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 17px;
    }
`;

export const PortfolioList = styled.ul`
    display: grid;
    grid-gap: 32px;
    grid-template-columns: repeat(2, 1fr);
    margin: 24px 0 120px;
    padding: 0;
    text-align: start;
    list-style-type: none;
    overflow-x: auto;

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
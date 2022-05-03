import styled from 'styled-components';
import { ReactComponent as Marker } from "../img/marker.svg";

export const ListWrapper = styled.section`
    padding: 32px;
    margin: 72px 0;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    background-color: ${({ theme }) => theme.fillColor.card};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        padding: 16px;
        margin: 48px 0;
    }
`;

export const ListHeader = styled.h2`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
    margin: 0;
    padding-bottom: 15px;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 18px;
        line-height: 22px;
        padding-bottom: 12px;
    }
`;

export const StyledList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
    margin: 24px 0 0;
    list-style-type: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
        margin: 12px 0 0;
    }
`;

export const StyledMarker = styled(Marker)`
    margin-right: 16px;
    flex-shrink: 0;
    & circle {
        fill: ${({ theme }) => theme.fillColor.main};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin-right: 8px;
        width: 6px;
        height: 6px;
    }
`;

export const ListItem = styled.li`
    display: inline-flex;
    align-items: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    padding: 4px;
    color: ${({ theme }) => theme.fillColor.textSecondary};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 14px;
        line-height: 17px;
    }
`;
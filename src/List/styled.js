import styled from 'styled-components';
import { ReactComponent as Marker } from "../img/marker.svg";

export const ListWrapper = styled.section`
    padding: 32px;
    margin: 72px 0;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    background-color: ${({ theme }) => theme.fillColor.card};
`;

export const ListHeader = styled.h2`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
    margin: 0;
    padding-bottom: 15px;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

export const StyledList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 24px 0 0 0;
    list-style-type: none;
`;

export const StyledMarker = styled(Marker)`
    margin-right: 15px;
    margin-bottom: 1px;
    & circle {
        fill: ${({theme}) => theme.fillColor.main};
    }
`;

export const ListItem = styled.li`
    flex-grow: 0;
    flex-basis: 33.33%;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin-top: 8px;
    color: ${({theme}) => theme.fillColor.textSecondary};
`;
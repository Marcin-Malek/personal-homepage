import α from 'color-alpha';
import styled from 'styled-components';

export const Link = styled.a`
    color: ${({theme}) => theme.fillColor.main};
    text-decoration: none;
    border-bottom: 1px solid ${({theme}) => α(theme.fillColor.main, 0.3)};
    padding-bottom: 1px;

    &:hover {
        border-color: unset;
    }
`;

export const EmojiWrapper = styled.span`
    font-size: 0.8em;
`;
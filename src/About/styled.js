import styled from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-areas: 
        "image switch"
        "image caption"
        "image header"
        "image description"
        "image button"
        "image empty";
    column-gap: 72px;
    margin-bottom: 72px;
`;

export const Image = styled.img`
    width: 384px;
    height: 384px;
    border-radius: 50%;
    background-color: black;
    grid-area: image;
`;

export const Caption = styled.span`
    grid-area: caption;
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.fillColor.textSecondary};
`;

export const Header = styled.h1`
    grid-area: header;
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    letter-spacing: 0.05em;
    margin: 12px 0 35px;
`;

export const Description = styled.span`
    grid-area: description;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin-bottom: 32px;
    color: ${({theme}) => theme.fillColor.textSecondary};
`;

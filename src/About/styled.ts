import styled, { keyframes } from "styled-components";

const upwardsFlowIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const rtlFlowIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(35px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-areas: 
        "image switch"
        "image caption"
        "image header"
        "image description"
        "image button"
        "image empty";
    column-gap: 72px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: minmax(128px, 1fr) 1fr;
        grid-template-areas: 
        "image switch"
        "caption caption"
        "header header"
        "description description"
        "button button";
        column-gap: 0;
    }
`;

export const Image = styled.img`
    width: 384px;
    height: 384px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 50%;
    grid-area: image;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        max-width: 384px;
        width: 100%;
        height: auto;
        aspect-ratio: 1/1;
        margin-bottom: 16px;
    }
`;

export const Caption = styled.span`
    grid-area: caption;
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.fillColor.textSecondary};
    animation: ${rtlFlowIn} ${({ theme }) => theme.transitionEasing};
    animation-duration: 1s;
    animation-delay: 0.5s;
    animation-fill-mode: both;
`;

export const Header = styled.h1`
    grid-area: header;
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    letter-spacing: 0.05em;
    margin: 12px 0 35px;
    animation: ${rtlFlowIn} ${({ theme }) => theme.transitionEasing};
    animation-duration: 1s;
    animation-delay: 0.5s;
    animation-fill-mode: both;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 22px;
        line-height: 27px;
        margin: 8px 0 16px;
    }
`;

export const Description = styled.p`
    grid-area: description;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin: 0 0 32px;
    color: ${({theme}) => theme.fillColor.textSecondary};
    animation: ${upwardsFlowIn} ${({ theme }) => theme.transitionEasing};
    animation-duration: 1s;
    animation-delay: 0.5s;
    animation-fill-mode: both;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 17px;
        margin: 0 0 24px;
    }
`;

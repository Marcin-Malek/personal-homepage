import styled, { keyframes } from "styled-components";

/* Styling of this component has been greatly influenced by the following codepen: 
https://codepen.io/finnhvman/pen/bmNdNr */

const circleWidth = 13;

export const ProgressForegroundAnimation = keyframes`
    0% {
        transform: rotate(-30deg);
    }
    29.4% {
        border-left-color: transparent;
    }
    29.41% {
        border-left-color: currentColor;
        }
    64.7% {
        border-bottom-color: transparent;
    }
    64.71% {
        border-bottom-color: currentColor;
    }
    100% {
        border-left-color: currentColor;
        border-bottom-color: currentColor;
        transform: rotate(225deg);
    }
`;

export const ProgressBackgroundAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    12.5% {
        transform: rotate(180deg);
        animation-timing-function: linear;
    }
    25% {
        transform: rotate(630deg);
    }
    37.5% {
        transform: rotate(810deg);
        animation-timing-function: linear;
    }
    50% {
        transform: rotate(1260deg);
    }
    62.5% {
        transform: rotate(1440deg);
        animation-timing-function: linear;
    }
    75% {
        transform: rotate(1890deg);
    }
    87.5% {
        transform: rotate(2070deg);
        animation-timing-function: linear;
    }
    100% {
        transform: rotate(2520deg);
    }
`;

export const CircleBorder = styled.div`
    margin: auto;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    outline: ${circleWidth}px solid ${({ theme }) => theme.borderColor};
    outline-offset: -${circleWidth}px;
    margin-top: 48px;
`;

export const StyledCircle = styled.progress`
    appearance: none;
    border-radius: 50%;
    width: 160px;
    height: 160px;
    color: ${({ theme }) => theme.fillColor.main};
    background-color: transparent;
    overflow: hidden;

    &:indeterminate {
        mask-image: linear-gradient(transparent 50%, black 50%), linear-gradient(to right, transparent 50%, black 50%);
        animation: ${ProgressBackgroundAnimation} 6s infinite cubic-bezier(0.3, 0.6, 1, 1);
    }

    &:-ms-lang(x), &:indeterminate {
        animation: none;
    }

    &:indeterminate::before,
    &:indeterminate::-webkit-progress-value {
        content: "";
        display: block;
        border: solid ${circleWidth}px transparent;
        border-top-color: currentColor;
        border-radius: 50%;
        width: 100% !important;
        height: 100%;
        animation: ${ProgressForegroundAnimation} 0.75s infinite linear alternate;
    }

    &:indeterminate::-moz-progress-bar {
        border: solid ${circleWidth}px currentColor;
        border-top-color: currentColor;
        border-radius: 50%;
        width: 100% !important;
        height: 100%;
        background-color: transparent;
        animation: ${ProgressForegroundAnimation} 0.75s infinite linear alternate;
    }

    &::-ms-fill {
        animation-name: -ms-ring;
    }
`;
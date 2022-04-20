import styled, { css } from "styled-components";
import { ReactComponent as Icon } from "../../img/brightness.svg";

export const Wrapper = styled.div`
    grid-area: switch;
    text-align: end;
    margin-bottom: 38px;
`;

export const Label = styled.label`
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.fillColor.textSecondary};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 0;
    }
`;

export const Switch = styled.span`
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin-left: 12px;
    width: 48px;
    height: 26px;
`;

export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 14px;
    outline: 1px solid ${({ theme }) => theme.fillColor.textSecondary};
    background-color: ${({ theme }) => theme.fillColor.themeSwitch};
    transition: background-color ${({ theme }) => theme.transition};

    &:focus-within {
        outline: 2px solid ${({ theme }) => theme.fillColor.textSecondary};
    }

    > input {
        appearance: none;
    }
`;

export const BrightnessIcon = styled(Icon)`
    position: absolute;
    height: 14px;
    width: 14px;
    padding: 3px;
    left: 3px;
    bottom: 3px;
    background-color: ${({ theme }) => theme.fillColor.textSecondary};
    transition: ${({ theme }) => theme.transition};
    border-radius: 50%;

    ${({ $themeType }) => $themeType === "dark" && css`
        transform: translate(20.5px, 0.4px) rotate(180deg);
        & path {
            fill: ${({ theme }) => theme.fillColor.background};
        }
    `}
`;
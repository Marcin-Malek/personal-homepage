import styled, { css } from "styled-components";
import { ReactComponent as Icon } from "../../img/brightness.svg";
import { ThemeType } from "../../types";

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
    display: inline-flex;
    width: 48px;
    height: 26px;
    margin-left: 12px;
    align-items: center;
    vertical-align: 30%;
    border-radius: 14px;
    cursor: pointer;
    outline: 1px solid ${({ theme }) => theme.fillColor.textSecondary};
    background-color: ${({ theme }) => theme.fillColor.themeSwitch};
    transition: background-color ${({ theme }) => theme.transition};

    &:focus-within {
        outline: 2px solid ${({ theme }) => theme.fillColor.textSecondary};
    }

    & input {
        appearance: none;
    }
`;

export const BrightnessIcon = styled(Icon)`
    height: 14px;
    width: 14px;
    padding: 3px;
    margin: 0 3px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.fillColor.textSecondary};
    transition: ${({ theme }) => theme.transition};

    ${({ $themeType }) => $themeType === ThemeType.Dark && css`
        transform: translate(100%) rotate(0.5turn);
        & path {
            fill: ${({ theme }) => theme.fillColor.background};
        }
    `}
`;
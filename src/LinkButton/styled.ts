import styled from "styled-components";

export const StyledButton = styled.a`
    grid-area: button;
    width: fit-content;
    display: inline-flex;
    align-items: center;
    padding: 12px 16px;
    border-radius: 4px;
    font-weight: 600;
    font-size: 20px;
    text-decoration: none;
    line-height: 24px;
    letter-spacing: 0.05em;
    user-select: none;
    color: white;
    background-color: ${({ theme }) => theme.fillColor.main};
    border: 1px solid ${({ theme }) => theme.borderColor};
    transition: box-shadow ${({ theme }) => theme.transition};

    &:hover {
        box-shadow: ${({ theme }) => theme.shadow.buttonFocus};
    }

    &:active { 
        box-shadow: ${({ theme }) => theme.shadow.buttonClick};
    }

    &:focus-visible {
        box-shadow: ${({ theme }) => theme.shadow.buttonFocus};
        outline: none;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 18px;
        line-height: 140%;
    }
`;
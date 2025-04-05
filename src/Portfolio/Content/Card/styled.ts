import styled from "styled-components";

export const StyledCard = styled.li`
    background: ${({ theme }) => theme.fillColor.card};
    border: 6px solid ${({ theme }) => theme.borderColor};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    padding: 56px;
    transition: border-color ${({ theme }) => theme.transition};

    &:hover {
        border-color: #0366D633;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        padding: 24px;
    }
`;

export const CardHeader = styled.h3`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.fillColor.main};
    margin: 0 0 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 16px;
        line-height: 19px;
        margin: 0 0 16px;
    }
`;

export const CardDescription = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.fillColor.textSecondary};
    margin: 24px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 14px;
        line-height: 17px;
        margin: 16px 0;
    }
`;

export const CardLinks = styled.dl`
    display: grid;
    font-weight: 400;
    font-size: 18px;
    margin: 24px 0 0;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.fillColor.textSecondary};
    row-gap: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 14px;
        line-height: 17px;
        row-gap: 10px;
    }
`;

export const LinkRow = styled.div`
    display: grid;
    grid-template-columns: 4em 1fr;
`;

export const LinkValue = styled.dd`
    margin: 0;
`;
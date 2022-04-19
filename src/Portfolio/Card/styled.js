import styled from 'styled-components';

export const StyledCard = styled.li`
    background: ${({ theme }) => theme.fillColor.card};
    border: 6px solid ${({ theme }) => theme.borderColor};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    padding: 56px;
    transition: ${({ theme }) => theme.transition};

    &:hover {
        border-color: #0366D633;
    }
`;

export const CardHeader = styled.h3`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.fillColor.main};
    margin: 0 0 24px;
`;

export const CardDescription = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.fillColor.textSecondary};
    margin: 24px 0;
`;

export const CardLink = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.fillColor.textSecondary};
    margin: 8px 0;
`;
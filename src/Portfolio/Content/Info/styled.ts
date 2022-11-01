import styled from "styled-components";

export const StyledInfo = styled.div`
    margin: 88px 0 140px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 48px 0 70px;
    }
`;

export const InfoHeader = styled.h3`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    margin: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 16px;
        line-height: 19px;
    }
`;

export const InfoText = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 17px;
        margin: 24px 0;
    }
`;
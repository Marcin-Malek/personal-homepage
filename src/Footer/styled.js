import styled from 'styled-components';

export const Caption = styled.div`
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    text-transform: uppercase;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.fillColor.textSecondary};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin-bottom: 12px;
    }
`;

export const Address = styled.address`
    font-style: unset;
`;

export const Mail = styled.a`
    font-weight: 900;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.05em;
    text-decoration: none;
    color: ${({ theme }) => theme.fillColor.textPrimary};
    transition: ${({theme}) => theme.transition};

    &:hover {
        color: ${({ theme }) => theme.fillColor.main};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 18px;
        line-height: 22px;
    }
`;

export const Text = styled.p`
    max-width: 670px;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin: 24px 0 56px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 14px;
        line-height: 17px;
        margin: 12px 0 40px 0;
    }
`;

export const IconLink = styled.a`
    margin-right: 24px;

    & path {
        transition: ${({theme}) => theme.transition};
        fill: ${({ theme }) => theme.fillColor.textPrimary};
    }

    &:hover {
        & path {
            fill: ${({ theme }) => theme.fillColor.main};
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin-right: 16px;
        
        & svg {
            width: 32px;
            height: 32px;
        }
    }
`;
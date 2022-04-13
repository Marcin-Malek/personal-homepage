import styled from "styled-components";

export const Label = styled.label`
    grid-area: switch;
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    text-transform: uppercase;
    text-align: end;
    color: ${({ theme }) => theme.fillColor.textSecondary};
`;

export const Switch = styled.input`
    vertical-align: middle;
    margin: 43px 10px;
    height: 16px;
`;
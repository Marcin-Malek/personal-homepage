import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    ::before, ::after {
    box-sizing: inherit;
    }

    body {
    font-family: 'Inter', sans-serif;
    max-width: 1216px;
    padding: 119px 14px 109px;
    margin: auto;
    background-color: ${({theme}) => theme.fillColor.background};
    transition: background-color 1s;
    }
`;
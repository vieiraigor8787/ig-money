import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --text-body: #9c9cb3;
        --text-title: #363f5f;
        --shape: #fff;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        //medida princiapal em 'rem'
        @media (max-width: 1000px) {
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialised;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: .6;
        cursor: not-allowed;
    }
`;

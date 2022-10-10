import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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

    body, input, textarea, button { 
        font: 400 1rem Kanit, sans-serif;
    }

    h1, h2, h3, h4, strong {
        font-weight: 700;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
    }

    body {
        background-color: ${props => props.theme['gray-800']};
        color: ${props => props.theme['gray-100']};
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

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --blue: #5429CC;
        --blue-light: #6933FF;
        --green: #33CC95;
        --red: #E52E4D;
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

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, strong {
        font-weight: 600;
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

    .react-modal-overlay {
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        border: 0;
        background: transparent;
        transition: 0.25s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;

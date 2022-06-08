import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #E52E4D;
        --blue: #5429CC;
        
        --blue-light: #6933FF;

        --text-light: #363F5F;
        --text-body: #969CB2;

        --shape: #ffffff;
    }


    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;   //15px
        }

        @media (max-width: 720px) {
            font-size: 87.75%; // 14px
        }
    }
    
    body {
        background: var(--background);
        -webkit-font-smoothig: antialiased;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`
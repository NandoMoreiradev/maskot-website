import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
    /* Importação da fonte Inter do Google Fonts - com fallbacks */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
        scroll-behavior: smooth;
    }

    body {
        /* Fonte Inter com fallbacks mais robustos */
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        /* Define o peso padrão como 'regular' */
        font-weight: 400;
        background-color: ${theme.colors.lightGray};
        color: ${theme.colors.text};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.5;
    }

    h1, h2, h3, h4, h5, h6 {
        /* Usa a mesma fonte, mas com um peso mais forte */
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        font-weight: 700; // Bold
        color: ${theme.colors.textDark};
        line-height: 1.2;
        margin-bottom: 1rem;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 800;
    }

    h2 {
        font-size: 2rem;
        font-weight: 700;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 600;
    }

    h4 {
        font-size: 1.25rem;
        font-weight: 600;
    }

    p {
        margin-bottom: 1rem;
        line-height: 1.6;
    }

    /* Ajuste para botões e outros elementos que podem precisar de um peso diferente */
    button, input, select, textarea {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    }

    button {
        cursor: pointer;
        border: none;
        outline: none;
        transition: all 0.2s ease-in-out;
    }

    a {
        text-decoration: none;
        color: inherit;
        transition: all 0.2s ease-in-out;
    }

    /* Remove outline padrão do Next.js */
    *:focus {
        outline: none;
    }

    /* Scroll personalizado */
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: ${theme.colors.lightGray};
    }

    ::-webkit-scrollbar-thumb {
        background: ${theme.colors.textMedium};
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${theme.colors.primary};
    }
`;
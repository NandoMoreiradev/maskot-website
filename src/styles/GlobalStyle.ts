import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
    /* Reset CSS */
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
        /* Fonte Inter via next/font (variável CSS customizada) */
        font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        font-weight: 400;
        background-color: ${theme.colors.pageBackground};
        color: ${theme.colors.text};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.6;
        overflow-x: hidden;
    }

    /* Tipografia Hierárquica */
    h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        color: ${theme.colors.textDark};
        line-height: 1.2;
        margin-bottom: 1rem;
        font-weight: 700;
    }

    h1 {
        font-size: clamp(2rem, 5vw, 3rem);
        font-weight: 800;
        letter-spacing: -0.02em;
    }

    h2 {
        font-size: clamp(1.75rem, 4vw, 2.5rem);
        font-weight: 700;
    }

    h3 {
        font-size: clamp(1.5rem, 3vw, 2rem);
        font-weight: 600;
    }

    h4 {
        font-size: clamp(1.25rem, 2vw, 1.5rem);
        font-weight: 600;
    }

    p {
        margin-bottom: 1rem;
        line-height: 1.7;
        color: ${theme.colors.text};
    }

    /* Elementos de Formulário */
    button, input, select, textarea {
        font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    button {
        cursor: pointer;
        border: none;
        outline: none;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        
        &:disabled {
            cursor: not-allowed;
            opacity: 0.6;
        }
    }

    a {
        text-decoration: none;
        color: inherit;
        transition: all 0.2s ease-in-out;
    }

    /* Acessibilidade - Foco Visível */
    *:focus-visible {
        outline: 2px solid ${theme.colors.primary};
        outline-offset: 2px;
    }

    /* Scroll Personalizado */
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${theme.colors.lightGray};
    }

    ::-webkit-scrollbar-thumb {
        background: ${theme.colors.textMedium};
        border-radius: 5px;
        
        &:hover {
            background: ${theme.colors.primary};
        }
    }

    /* Seleção de Texto */
    ::selection {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
    }

    /* Imagens Responsivas */
    img {
        max-width: 100%;
        height: auto;
        display: block;
    }
`;
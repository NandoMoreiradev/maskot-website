import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            accent: string;
            text: string;
            lightGray: string;
            white: string;
            danger: string;
            pageBackground: string;
            textDark: string;
            textMedium: string;
            backgroundMedium: string;

            // Paleta específica para WhatsApp (mantendo do seu projeto)
            whatsapp: {
                background: string;
                header: string;
                chatBackground: string;
                outboundMessage: string;
                inboundMessage: string;
                accentGreen: string;
                icon: string;
            }
        };
        fonts: {
            main: string;
        };
    }
}
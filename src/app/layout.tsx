'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import { GlobalStyle } from '@/styles/GlobalStyle'

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Maskot CRM - O CRM que entende escolas</title>
            <meta
                name="description"
                content="A única plataforma realmente integrada para gestão educacional. Do primeiro WhatsApp até a matrícula efetivada."
            />

            {/* Favicon Configuration */}
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="shortcut icon" href="/favicon.ico" />

            {/* Apple Touch Icon (se tiver) */}
            <link rel="apple-touch-icon" href="/favicon.ico" />

            {/* Manifest para PWA (futuro) */}
            <meta name="theme-color" content="#007BFF" />
        </head>
        <body>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}
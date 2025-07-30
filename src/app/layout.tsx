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

            {/* Favicon Configuration - Agora vai funcionar! */}
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/favicon.ico" />

            {/* Manifest para PWA */}
            <meta name="theme-color" content="#007BFF" />

            {/* SEO Essencial */}
            <meta property="og:title" content="Maskot CRM - O CRM que entende escolas" />
            <meta property="og:description" content="A única plataforma realmente integrada para gestão educacional. Aumente suas matrículas com WhatsApp, automações e relatórios inteligentes." />
            <meta property="og:image" content="/logo_maskot_website.png" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
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
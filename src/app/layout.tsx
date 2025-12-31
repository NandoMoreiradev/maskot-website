import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import ThemeClientProvider from '@/providers/ThemeClientProvider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#007BFF',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://maskot.com.br'),
  title: {
    default: 'Maskot Edu - O CRM que entende escolas',
    template: '%s | Maskot Edu',
  },
  description:
      'A única plataforma realmente integrada para gestão educacional. Do primeiro WhatsApp até a matrícula efetivada.',
  keywords: [
    'CRM educacional',
    'gestão escolar',
    'WhatsApp para escolas',
    'captação de alunos',
    'matrícula digital',
  ],
  authors: [{ name: 'Maskot' }],
  creator: 'Maskot',
  publisher: 'Maskot',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://maskot.com.br',
    title: 'Maskot Edu - O CRM que entende escolas',
    description:
        'A única plataforma realmente integrada para gestão educacional. Aumente suas matrículas com WhatsApp, automações e relatórios inteligentes.',
    siteName: 'Maskot Edu',
    images: [
      {
        url: '/logo_maskot_website.png',
        width: 1200,
        height: 630,
        alt: 'Maskot Edu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maskot Edu - O CRM que entende escolas',
    description:
        'A única plataforma realmente integrada para gestão educacional.',
    images: ['/logo_maskot_website.png'],
  },

  manifest: '/manifest.json',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="pt-BR" className={inter.variable}>
      <body>
      <StyledComponentsRegistry>
        <ThemeClientProvider>
          {children}
        </ThemeClientProvider>
      </StyledComponentsRegistry>
      </body>
      </html>
  )
}
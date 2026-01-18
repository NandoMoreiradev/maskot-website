import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import "./globals.css";
import StyledComponentsRegistry from '@/lib/registry'
import ThemeClientProvider from '@/providers/ThemeClientProvider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const viewport: Viewport = {
  themeColor: '#007BFF',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Maskot Edu',
  description: 'CRM Educacional.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
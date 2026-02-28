import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import "./globals.css";
import Script from "next/script";
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
  verification: {
    google: '4xC84Wrsi02_zzJgxnligksF3vNtmfbGympo8dYAEPA',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <StyledComponentsRegistry>
          <ThemeClientProvider>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-9XNN6J8DYE"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-9XNN6J8DYE');
              `}
            </Script>
            {children}
          </ThemeClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
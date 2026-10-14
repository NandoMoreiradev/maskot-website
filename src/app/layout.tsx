import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import "./globals.css";
import Script from "next/script";
import StyledComponentsRegistry from '@/lib/registry'
import ThemeClientProvider from '@/providers/ThemeClientProvider'
import CookieConsent from '@/components/legal/CookieConsent'
import WhatsAppButton from '@/components/WhatsAppButton'

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
  title: {
    default: 'Maskot Edu | Captação e Matrículas para Escolas Particulares',
    template: '%s | Maskot',
  },
  description: 'Ecossistema que une marketing, comercial e atendimento com IA para escolas particulares captarem mais alunos e fecharem mais matrículas. Experimente grátis.',
  metadataBase: new URL('https://www.maskotedu.com.br'),
  alternates: {
    canonical: 'https://www.maskotedu.com.br',
  },
  openGraph: {
    title: 'Maskot Edu | Captação e Matrículas para Escolas Particulares',
    description: 'Ecossistema que une marketing, comercial e atendimento com IA para escolas particulares captarem mais alunos e fecharem mais matrículas.',
    url: 'https://www.maskotedu.com.br',
    siteName: 'Maskot',
    locale: 'pt_BR',
    type: 'website',
  },
  verification: {
    google: '4xC84Wrsi02_zzJgxnligksF3vNtmfbGympo8dYAEPA',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <StyledComponentsRegistry>
          <ThemeClientProvider>
            <Script id="google-consent" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                
                gtag('consent', 'default', {
                  'analytics_storage': 'denied',
                  'ad_storage': 'denied',
                  'ad_user_data': 'denied',
                  'ad_personalization': 'denied',
                  'wait_for_update': 500
                });

                if (typeof window !== 'undefined') {
                  try {
                    const consent = localStorage.getItem('maskot_analytics_consent');
                    if (consent === 'true') {
                      gtag('consent', 'update', {
                        'analytics_storage': 'granted',
                        'ad_storage': 'granted',
                        'ad_user_data': 'granted',
                        'ad_personalization': 'granted'
                      });
                    }
                  } catch(e) {}
                }
              `}
            </Script>
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
            <WhatsAppButton />
            <CookieConsent />
          </ThemeClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
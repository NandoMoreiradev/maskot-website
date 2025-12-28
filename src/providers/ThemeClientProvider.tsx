'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import { GlobalStyle } from '@/styles/GlobalStyle'

export default function ThemeClientProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
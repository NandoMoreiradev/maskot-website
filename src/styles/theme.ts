export const theme = {
  colors: {
    // Cores Principais (Brand Identity)
    primary: '#007BFF',
    secondary: '#28A745',
    accent: '#FD7E14',
    
    // Neutrals (Escala Completa)
    white: '#FFFFFF',
    lightGray: '#F8F9FA',
    backgroundMedium: '#E9ECEF',
    textMedium: '#6C757D',
    text: '#343A40',
    textDark: '#212529',
    
    // Status Colors
    success: '#28A745',
    danger: '#DC3545',
    warning: '#FFC107',
    info: '#17A2B8',
    
    // Backgrounds
    pageBackground: '#F8F9FA',
    cardBackground: '#FFFFFF',
    
    // Paleta WhatsApp
    whatsapp: {
      background: '#E5DDD5',
      header: '#F0F2F5',
      chatBackground: '#F0F2F5',
      outboundMessage: '#D9FDD3',
      inboundMessage: '#FFFFFF',
      accentGreen: '#00A884',
      icon: '#54656F',
    },
  },
  
  // Typography Scale (Mobile First)
  typography: {
    fontFamily: {
      main: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.7,
    },
  },
  
  // Spacing System (8px base)
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '6rem',   // 96px
  },
  
  // Breakpoints (Mobile First)
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Media Queries (Helper)
  media: {
    xs: '@media (min-width: 320px)',
    sm: '@media (min-width: 640px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 1024px)',
    xl: '@media (min-width: 1280px)',
    '2xl': '@media (min-width: 1536px)',
  },
  
  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.25rem',   // 4px
    md: '0.5rem',    // 8px
    lg: '0.75rem',   // 12px
    xl: '1rem',      // 16px
    full: '9999px',
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  
  // Transitions
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Z-Index Scale
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
} as const;

// Type helper para TypeScript
export type Theme = typeof theme;
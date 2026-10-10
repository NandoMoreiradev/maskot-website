export const theme = {
  colors: {
    primary: '#2563EB', // Azul da Gola/Capelo
    primaryDark: '#1E3A8A',
    primaryLight: '#60A5FA',
    secondary: '#22C55E', // Verde da Camisa
    accent: '#FF7A00', // Laranja Raposa Maskot
    borderLight: '#E2E8F0',
    borderMedium: '#CBD5E1',

    mia: {
      from: '#F97316',
      to: '#F59E0B',
      tagBg: '#FFF7ED',
      tagBorder: '#FFEDD5',
      soft: '#FFEDD5',
    },

    white: '#FFFFFF',
    lightGray: '#F8FAFC',
    backgroundMedium: '#F1F5F9',
    textMedium: '#64748B',
    text: '#334155',
    textDark: '#0F172A',
    
    success: '#22C55E', // Verde da Camisa
    danger: '#EF4444',
    dangerSoft: '#FEF2F2',
    dangerBorder: '#FECACA',
    warning: '#FBBF24', // Amarelo do Pingente
    info: '#3B82F6',
    
    pageBackground: '#F8FAFC',
    cardBackground: '#FFFFFF',
    
    whatsapp: {
      background: '#E5DDD5',
      header: '#F0F2F5',
      chatBackground: '#F0F2F5',
      outboundMessage: '#DCF8C6',
      inboundMessage: '#FFFFFF',
      accentGreen: '#25D366',
      icon: '#54656F',
    },
  },

  gradients: {
    primary: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
    primaryHover: 'linear-gradient(135deg, #1D4ED8 0%, #1E3A8A 100%)',
    accent: 'linear-gradient(135deg, #FF7A00 0%, #EA580C 100%)',
    secondary: 'linear-gradient(135deg, #22C55E 0%, #15803D 100%)',
    background: 'linear-gradient(135deg, #F8FAFC 0%, #EEF2F6 100%)',
    glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.3) 100%)',
  },
  
  typography: {
    fontFamily: {
      main: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
    },
    fontSize: {
      xs: '0.75rem',    
      sm: '0.875rem',   
      base: '1rem',     
      lg: '1.125rem',   
      xl: '1.25rem',    
      '2xl': '1.5rem',  
      '3xl': '1.875rem', 
      '4xl': '2.25rem', 
      '5xl': '3rem',    
      '6xl': '4rem',    
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
      tight: 1.1,
      normal: 1.5,
      relaxed: 1.7,
    },
  },
  
  spacing: {
    xs: '0.25rem',   
    sm: '0.5rem',    
    md: '1rem',      
    lg: '1.5rem',    
    xl: '2rem',      
    '2xl': '3rem',   
    '3xl': '4rem',   
    '4xl': '6rem',   
    '5xl': '8rem',   
  },
  
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  media: {
    xs: '@media (min-width: 320px)',
    sm: '@media (min-width: 640px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 1024px)',
    xl: '@media (min-width: 1280px)',
    '2xl': '@media (min-width: 1536px)',
  },
  
  borderRadius: {
    none: '0',
    sm: '0.375rem',  
    md: '0.5rem',    
    lg: '0.75rem',   
    xl: '1rem',      
    '2xl': '1.5rem', 
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
    md: '0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -1px rgba(15, 23, 42, 0.03)',
    lg: '0 10px 15px -3px rgba(15, 23, 42, 0.05), 0 4px 6px -2px rgba(15, 23, 42, 0.025)',
    xl: '0 20px 25px -5px rgba(15, 23, 42, 0.05), 0 10px 10px -5px rgba(15, 23, 42, 0.02)',
    '2xl': '0 25px 50px -12px rgba(15, 23, 42, 0.15)',
    glow: '0 0 20px rgba(79, 70, 229, 0.3)',
  },
  
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: '500ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  
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

export type Theme = typeof theme;


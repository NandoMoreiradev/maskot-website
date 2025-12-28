import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      // Cores Principais
      primary: string;
      secondary: string;
      accent: string;
      
      // Neutrals
      white: string;
      lightGray: string;
      backgroundMedium: string;
      textMedium: string;
      text: string;
      textDark: string;
      
      // Status Colors
      success: string;
      danger: string;
      warning: string;
      info: string;
      
      // Backgrounds
      pageBackground: string;
      cardBackground: string;
      
      // WhatsApp Palette
      whatsapp: {
        background: string;
        header: string;
        chatBackground: string;
        outboundMessage: string;
        inboundMessage: string;
        accentGreen: string;
        icon: string;
      };
    };
    
    typography: {
      fontFamily: {
        main: string;
      };
      fontSize: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
      };
      fontWeight: {
        light: number;
        regular: number;
        medium: number;
        semibold: number;
        bold: number;
        extrabold: number;
      };
      lineHeight: {
        tight: number;
        normal: number;
        relaxed: number;
      };
    };
    
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
    
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
    
    media: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
    
    borderRadius: {
      none: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };
    
    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
    
    transitions: {
      fast: string;
      base: string;
      slow: string;
    };
    
    zIndex: {
      dropdown: number;
      sticky: number;
      fixed: number;
      modalBackdrop: number;
      modal: number;
      popover: number;
      tooltip: number;
    };
  }
}
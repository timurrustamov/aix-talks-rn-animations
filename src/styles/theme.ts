import { createContext } from 'react';
import { Dimensions } from 'react-native';

/**
 * Default theme for the project
 * The shape of this object determines the Theme type
 */
const rootTheme = {
  /** Main colors */
  colors: {
    primary: '#0152c7',
    accent: '#FFD336',
    white: '#FFFFFF',
    black: '#000000',
    text: '#212529',
    caption: '#9EA0A5',
    paleGrey: '#2C2E37',
    inactive: '#F1F2F8',
    lightGrey: '#F9FBFE',
    transparent: 'transparent',
    success: 'rgb(31,188,105)',
    softWhite: 'rgba(255, 255, 255, 0.75)',
    alert: '#E72134',
    background: '#f6f7fa',
  },
  /** Contrasts to the main colors */
  contrasts: {
    primary: '#FFFFFF',
    accent: '#2c2c2c',
    white: '#212529',
    black: '#FFFFFF',
    text: '#FFFFFF',
    caption: '#FFFFFF',
    paleGrey: '#FFFFFF',
    inactive: '#000000',
    lightGrey: '#000000',
    transparent: '#212529',
    success: '#FFFFFF',
    softWhite: '#212529',
    alert: '#FFFFFF',
    background: '#212529',
  },
  /** Default spacing unit (used in `spacing` method as base value) */
  spacingUnit: 8,
  dimensions: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  shadows: {
    xs: {
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.2,
      shadowColor: 'black',
      shadowRadius: 4,
    },
    sm: {
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.5,
      shadowColor: 'black',
      shadowRadius: 20,
    },
  },
};

/** Helper for creating shorthard px values */
function spacing(
  this: typeof rootTheme,
  top: number,
  right?: number,
  bottom?: number,
  left?: number
): string {
  const unit = this.spacingUnit;
  if (typeof right !== 'number') {
    return `${unit * top}px`;
  }
  if (typeof bottom !== 'number') {
    return `${unit * top}px ${unit * right}px`;
  }
  if (typeof left !== 'number') {
    return `${unit * top}px ${unit * right}px ${unit * bottom}px`;
  }
  return `${unit * top}px ${unit * right}px ${unit * bottom}px ${unit * left}px`;
}

const defaultSpacing = spacing.bind(rootTheme);

const defaultTheme = { ...rootTheme, spacing: defaultSpacing };

/**
 * Shape of the Theme for the application
 */
export type Theme = typeof defaultTheme;

export type Color = keyof Theme['colors'];

export const ThemeContext = createContext(defaultTheme);

export type ThemeProviderProps = {
  theme?: Theme;
};

export default defaultTheme;

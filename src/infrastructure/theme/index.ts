import { colors } from './colors';
import { space, lineHeights } from './spacing';
import { sizes } from './sizes';
import { fonts, fontWeights, fontSizes } from './fonts';
import { DefaultTheme } from 'styled-components/native';

export interface Theme extends DefaultTheme {
  colors: any;
  space: any[];
  lineHeights: any;
  sizes: string[];
  fonts: any;
  fontSizes: any;
  fontWeights: any;
}

export const theme: Theme = {
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};

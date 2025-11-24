import { dark } from './dark';
import { light } from './light';

export const COLORS = {
  light,
  dark,
};

export type ColorsScheme = typeof COLORS.light;

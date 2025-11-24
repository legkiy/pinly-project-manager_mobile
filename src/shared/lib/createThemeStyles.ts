import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { ColorsScheme } from '../styles';

export function createThemeStyles<T extends StyleSheet.NamedStyles<T>>(
  style: (themeColors: ColorsScheme) => T
) {
  return (colors: ColorsScheme): T => {
    return useMemo(() => StyleSheet.create(style(colors)), [colors]);
  };
}

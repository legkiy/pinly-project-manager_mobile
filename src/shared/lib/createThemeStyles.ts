import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { ColorsScheme } from '../styles'; // Или откуда у тебя тип ColorsScheme

// Перегрузки для двух случаев
export function createThemeStyles<
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>
>(style: (themeColors: ColorsScheme) => T): (colors: ColorsScheme) => T;

export function createThemeStyles<
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>
>(style: T): T;

// Имплементация
export function createThemeStyles<
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>
>(
  style: ((themeColors: ColorsScheme) => T) | T
): ((colors: ColorsScheme) => T) | T {
  // Если это функция (динамичный случай)
  if (typeof style === 'function') {
    return (colors: ColorsScheme): T => {
      // ТОЛЬКО внутри компонента!
      return useMemo(() => StyleSheet.create(style(colors)), [colors]);
    };
  }

  // Если объект (статичный случай)
  return StyleSheet.create(style);
}

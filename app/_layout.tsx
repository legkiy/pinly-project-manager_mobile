import '@/i18n';
import { useThemeStore } from '@/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { Appearance, useColorScheme } from 'react-native';

export default function RootLayout() {
  const { isSystemMode, setThemeBySystem } = useThemeStore();
  const systemTheme = useColorScheme();

  useEffect(() => {
    // Слушатель системной темы: если нет сохранённого выбора, подстраиваемся
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      AsyncStorage.getItem('theme-storage').then(() => {
        if (isSystemMode) {
          // Если пользователь не выбирал вручную
          setThemeBySystem((colorScheme as 'light' | 'dark') || 'light');
        }
      });
    });

    return () => subscription.remove();
  }, [isSystemMode, setThemeBySystem, systemTheme]);

  return <Stack />;
}

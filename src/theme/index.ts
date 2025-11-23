import { COLORS } from '@/shared/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance } from 'react-native';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type ThemeMode = 'light' | 'dark';

type State = {
  mode: ThemeMode;
  isSystemMode: boolean;
  setTheme: (newMode: ThemeMode) => void;
  setThemeBySystem: (newMode: ThemeMode) => void;
  themeColors: (typeof COLORS)['light'];
};

export const themeStore = create<State>()(
  persist(
    (set, get) => ({
      isSystemMode: true,
      mode: (Appearance.getColorScheme() as ThemeMode) || 'light',
      themeColors:
        Appearance.getColorScheme() === 'dark' ? COLORS.dark : COLORS.light,

      setTheme: (newMode: ThemeMode) => {
        const newColors = newMode === 'dark' ? COLORS.dark : COLORS.light;
        set({ mode: newMode, themeColors: newColors, isSystemMode: false });
      },
      setThemeBySystem: (newMode: ThemeMode) => {
        const newColors = newMode === 'dark' ? COLORS.dark : COLORS.light;
        set({ mode: newMode, themeColors: newColors, isSystemMode: true });
      },
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: ({ setTheme, setThemeBySystem, ...state }) => state,
    }
  )
);

export const useThemeStore = themeStore;

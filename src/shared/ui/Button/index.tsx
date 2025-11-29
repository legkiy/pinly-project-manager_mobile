import { createThemeStyles } from '@/shared/lib';
import { STYLE_VARS } from '@/shared/styles';
import { useThemeStore } from '@/theme';
import React, { memo, ReactNode } from 'react';
import { Pressable, ViewStyle } from 'react-native';

type ButtonProps = {
  onPress: () => void;
  children: ReactNode; // Основной проп для любого контента (ReactNode)
  disabled?: boolean;
  style?: ViewStyle; // Кастомные стили для контейнера
};

const Button = ({
  onPress,
  children,
  disabled = false,
  style,
}: ButtonProps) => {
  const themeColors = useThemeStore((s) => s.themeColors);
  const styles = themeStyles(themeColors);
  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      style={[styles.container, style]}
    >
      {children}
    </Pressable>
  );
};

export default memo(Button);

const themeStyles = createThemeStyles((colors) => ({
  container: {
    backgroundColor: colors.accent.main,
    paddingVertical: STYLE_VARS.spacing.small,
    paddingHorizontal: STYLE_VARS.spacing.small,
    borderRadius: STYLE_VARS.br.default,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

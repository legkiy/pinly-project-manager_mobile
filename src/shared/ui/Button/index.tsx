import React, { ReactNode } from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';

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
  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      style={[dynamicStyles.container, style]}
      android_ripple={{ color: '#005BBB' }} // Ripple-эффект для Android
    >
      {children}
      {/* {React.isValidElement(children) ? (
        children // Если children - ReactNode (например, <T mess="key" />), рендерим как есть
      ) : (
        <Text style={[dynamicStyles.text, textStyle]}>{children}</Text> // Fallback для строк
      )} */}
    </Pressable>
  );
};

export default Button;

const dynamicStyles = StyleSheet.create({
  container: {
    backgroundColor: '#007AFF', // Синий для светлой, темный для темной
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF', // Белый текст для контраста
    fontSize: 16,
    fontWeight: 'bold',
  },
});

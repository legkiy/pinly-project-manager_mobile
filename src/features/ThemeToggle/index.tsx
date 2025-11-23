import { Button, T } from '@/shared/ui';
import { useThemeStore } from '@/theme';
import { View } from 'react-native';

const ThemeToggle = () => {
  const { setTheme } = useThemeStore();
  return (
    <View>
      <Button onPress={() => setTheme('dark')}>
        <T mess="dark" />
      </Button>
      <Button onPress={() => setTheme('light')}>
        <T mess="light" />
      </Button>
    </View>
  );
};
export default ThemeToggle;

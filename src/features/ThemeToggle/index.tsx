import { createThemeStyles } from '@/shared/lib';
import { COLORS } from '@/shared/styles';
import { Button } from '@/shared/ui';
import { useThemeStore } from '@/theme';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

import { View } from 'react-native';

const ThemeToggle = () => {
  const { setTheme, mode } = useThemeStore();

  const handleOnChange = () => {
    if (mode === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <View style={styles.box}>
      <Button
        onPress={handleOnChange}
        style={{ backgroundColor: 'transparent' }}
      >
        {mode === 'light' ? (
          <FontAwesome6
            name="moon"
            iconStyle="solid"
            size={24}
            color={COLORS.dark.bg}
            style={styles.icon}
          />
        ) : (
          <MaterialIcons
            name="sunny"
            size={24}
            color={COLORS.light.bg}
            style={styles.icon}
          />
        )}
      </Button>
    </View>
  );
};
export default ThemeToggle;

const styles = createThemeStyles({
  box: {},
  icon: {
    height: 24,
    width: 24,
  },
});

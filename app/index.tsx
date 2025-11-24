import { ThemeToggle } from '@/features';
import { T } from '@/shared/ui';
import { useThemeStore } from '@/theme';
import { StatusBar, Text, View } from 'react-native';

export default function Index() {
  const { mode } = useThemeStore();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StatusBar />
      <T mess="hello" />
      <ThemeToggle />
      <Text>Edit app/index.tsx to edit this screen.{mode}</Text>
    </View>
  );
}

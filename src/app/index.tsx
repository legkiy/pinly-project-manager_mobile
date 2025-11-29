import { ThemeToggle } from '@/features';
import { useThemeStore } from '@/theme';
import { Header, ProjectsList } from '@/widgets';
import { Link } from 'expo-router';
import { StatusBar, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const { mode } = useThemeStore();

  return (
    <SafeAreaView>
      <StatusBar />
      <Header />
      <Link
        href={{
          pathname: '/settings',
        }}
      >
        <Text>Edit app/index.tsx to edit this screen.{mode}</Text>
      </Link>
      <ThemeToggle />
      <ProjectsList />

      {/* <T mess="hello" />
        <Text>Edit app/index.tsx to edit this screen.{mode}</Text> */}
    </SafeAreaView>
  );
}

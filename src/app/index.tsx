import { ThemeToggle } from '@/features';
import { Header, ProjectsList } from '@/widgets';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Header />
      <ThemeToggle />
      <ProjectsList />

      {/* <T mess="hello" />
        <Text>Edit app/index.tsx to edit this screen.{mode}</Text> */}
    </SafeAreaView>
  );
}

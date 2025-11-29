import { Header, ProjectsList } from '@/widgets';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Header />
      <ProjectsList />
    </SafeAreaView>
  );
}

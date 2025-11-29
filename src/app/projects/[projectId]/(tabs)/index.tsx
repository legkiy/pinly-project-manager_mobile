import { Header } from '@/widgets';
import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProjectIdScreen = () => {
  const { projectId } = useLocalSearchParams();

  return (
    <SafeAreaView>
      <Header needBack />
      <Text>ProjectIdScreen</Text>
      <Text>{projectId}</Text>
    </SafeAreaView>
  );
};
export default ProjectIdScreen;

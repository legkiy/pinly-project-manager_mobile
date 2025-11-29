import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProjectIdScreen = () => {
  const s = useLocalSearchParams();
  return (
    <SafeAreaView>
      <Text>ProjectIdScreen</Text>
    </SafeAreaView>
  );
};
export default ProjectIdScreen;

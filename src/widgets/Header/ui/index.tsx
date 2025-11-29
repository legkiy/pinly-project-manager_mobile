import { ThemeToggle } from '@/features';
import { createThemeStyles } from '@/shared/lib';
import { STYLE_VARS } from '@/shared/styles';
import { NavigateLink, T } from '@/shared/ui';
import { useNavigation } from 'expo-router';
import { View } from 'react-native';

type Props = {
  needBack?: boolean;
};

const Header = ({ needBack }: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View>
        {needBack && <T mess="Back" onPress={() => navigation.goBack()} />}
      </View>
      <ThemeToggle />
      <NavigateLink href={'/settings'}>
        <T mess="Settings" />
      </NavigateLink>
    </View>
  );
};
export default Header;

const styles = createThemeStyles({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingInline: STYLE_VARS.spacing.default * 2,
    paddingBottom: STYLE_VARS.spacing.default,
  },
});

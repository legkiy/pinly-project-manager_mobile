import { createThemeStyles } from '@/shared/lib';
import { STYLE_VARS } from '@/shared/styles';
import { T } from '@/shared/ui';
import { Link, LinkProps } from 'expo-router';
import { View } from 'react-native';

type Props = {
  backLink?: LinkProps['href'];
};

const Header = () => {
  return (
    <View style={styles.header}>
      <Link href={{ pathname: '/' }}>
        <T mess="Back" />
      </Link>
      <T mess="Header" />
      <T mess="Settings" />
    </View>
  );
};
export default Header;

const styles = createThemeStyles({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingInline: STYLE_VARS.spacing.default * 2,
  },
});

import { createThemeStyles } from '@/shared/lib';
import { useThemeStore } from '@/theme';
import { useTranslation } from 'react-i18next';
import { Text, TextProps } from 'react-native';
type TProps = Omit<TextProps, 'children'> & {
  mess?: string;
};

const T = ({ mess, ...props }: TProps) => {
  const { t } = useTranslation();
  const themeColors = useThemeStore((s) => s.themeColors);
  if (!mess) {
    return null;
  }
  const styles = themeStyles(themeColors);
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {t(mess)}
    </Text>
  );
};
export default T;

const themeStyles = createThemeStyles((colors) => ({
  text: {
    color: colors.text.main,
  },
}));

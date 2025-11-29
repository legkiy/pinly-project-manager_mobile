import { createThemeStyles } from '@/shared/lib';
import { useThemeStore } from '@/theme';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

type Props = {
  html: string;
};
const HtmlText = ({ html }: Props) => {
  const { width } = useWindowDimensions();
  const themeColors = useThemeStore((s) => s.themeColors);

  if (!html.trim()) {
    return null;
  }

  const styles = textThemeStyles(themeColors);
  return (
    <RenderHtml
      source={{
        html,
      }}
      contentWidth={width}
      baseStyle={styles.text}
    />
  );
};
export default HtmlText;

const textThemeStyles = createThemeStyles((colors) => ({
  text: {
    color: colors.text.main,
  },
}));

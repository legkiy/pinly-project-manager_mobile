import { createThemeStyles } from '@/shared/lib';
import { STYLE_VARS } from '@/shared/styles';
import { HtmlText, NavigateLink, T } from '@/shared/ui';
import { useThemeStore } from '@/theme';
import { FC } from 'react';
import { Dimensions, View } from 'react-native';
import { Project } from '../../models';

type Props = Project;
const ProjectCard: FC<Props> = ({ title, description, id }) => {
  const themeColors = useThemeStore((s) => s.themeColors);
  const styles = themeStyles(themeColors);

  return (
    <NavigateLink href={`/projects/${id}`} style={styles.card}>
      <View>
        <T mess={title} />
        <HtmlText html={description || ''} />
      </View>
    </NavigateLink>
  );
};
export default ProjectCard;
const { width } = Dimensions.get('screen');
const cardMargin = STYLE_VARS.spacing.small;
const cardWidth = width / 2 - cardMargin * 4;

const themeStyles = createThemeStyles((colors) => ({
  card: {
    flex: 1,
    maxWidth: cardWidth,
    padding: STYLE_VARS.spacing.default,
    borderRadius: STYLE_VARS.br.default,
    backgroundColor: colors.card,
    ...STYLE_VARS.shadow.default,
  },
}));

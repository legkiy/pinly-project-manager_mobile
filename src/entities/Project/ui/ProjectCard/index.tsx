import { createThemeStyles } from '@/shared/lib';
import { STYLE_VARS } from '@/shared/styles';
import { T } from '@/shared/ui';
import { useThemeStore } from '@/theme';
import { FC } from 'react';
import { Dimensions, View } from 'react-native';
import { Project } from '../../models';

type Props = Project;
const ProjectCard: FC<Props> = ({ title, description }) => {
  const themeColors = useThemeStore((s) => s.themeColors);
  const styles = themeStyles(themeColors);
  return (
    <View style={styles.card}>
      <T mess={title} />
      <T mess={description} />
    </View>
  );
};
export default ProjectCard;
const { width } = Dimensions.get('window');
const cardMargin = STYLE_VARS.spacing.small; // Отступ между карточками (горизонтальный и вертикальный)
// const cardWidth = width / 2 - cardMargin * 2;

const themeStyles = createThemeStyles((colors) => ({
  card: {
    flex: 1,
    padding: STYLE_VARS.spacing.default,
    borderRadius: STYLE_VARS.br.default,
    // maxWidth: cardWidth,
    // margin: cardMargin,
    backgroundColor: colors.card,

    // elevation: 4,
    // shadowColor: 'black',
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 6,

    // ...STYLE_VARS.shadow.default,
  },
}));

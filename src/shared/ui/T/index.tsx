import { useTranslation } from 'react-i18next';
import { Text, TextProps } from 'react-native';
type TProps = Omit<TextProps, 'children'> & {
  mess: string;
};

const T = ({ mess, ...props }: TProps) => {
  const { t } = useTranslation();
  return <Text {...props}>{t(mess)}</Text>;
};
export default T;

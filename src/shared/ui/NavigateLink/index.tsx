import { Link, LinkProps } from 'expo-router';

type Props = LinkProps;

const NavigateLink = ({ ...props }: Props) => {
  return <Link {...props} />;
};
export default NavigateLink;

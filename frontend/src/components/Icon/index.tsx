import { icons, type IconName } from '@/assets/icons';

export type IconProps = {
  iconName: IconName;
  size?: number;
  color?: string;
};

export const Icon = ({ iconName, size = 24, color = 'black' }: IconProps) => {
  const SelectedIcon = icons[iconName];

  return <SelectedIcon width={size} height={size} style={{ color }} />;
};

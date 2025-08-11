import { icons } from './icons';

export const Icon = ({
  iconName,
  size = 24,
  color = 'currentColor',
}: {
  iconName: keyof typeof icons;
  size?: number;
  color?: string;
}) => {
  const SelectedIcon = icons[iconName];

  return <SelectedIcon width={size} height={size} style={{ fill: color }} />;
};

import plus from './plus.svg?react';
import search from './search.svg?react';
import close from './close.svg?react';

export const icons = {
  plus,
  search,
  close,
};

export type IconName = keyof typeof icons;

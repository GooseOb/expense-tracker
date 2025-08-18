import plus from './plus.svg?react';
import search from './search.svg?react';
import close from './close.svg?react';
import arrowNumeric from './arrow-numeric.svg?react';

export const icons = {
  plus,
  search,
  close,
  arrowNumeric,
};

export type IconName = keyof typeof icons;

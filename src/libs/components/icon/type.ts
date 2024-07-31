import { icons } from 'feather-icons';
import { ComponentProps } from 'react';

export interface Props extends Omit<ComponentProps<'img'>, 'src' | 'alt'> {
  name: keyof typeof icons;
  size?: number | string;
  strokeWidth?: number | string;
  color?: string;
  fill: string;
  rotate?: number;
}

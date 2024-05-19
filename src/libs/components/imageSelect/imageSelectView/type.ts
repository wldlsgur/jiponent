import { ComponentProps } from 'react';

export interface Props extends Omit<ComponentProps<'img'>, 'src' | 'alt'> {
  alt: string;
}

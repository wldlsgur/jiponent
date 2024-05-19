import { ComponentProps } from 'react';

export interface Props extends Omit<ComponentProps<'img'>, 'src' | 'alt'> {
  alt: string;
  listRest?: ComponentProps<'ul'>;
  itemRest?: ComponentProps<'li'>;
}

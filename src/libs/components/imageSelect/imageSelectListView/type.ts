import { ComponentProps } from 'react';

export interface Props {
  alt: string;
  ulAttribute?: ComponentProps<'ul'>;
  liAttribute?: ComponentProps<'li'>;
  imgAttribute?: Omit<ComponentProps<'img'>, 'src' | 'alt'>;
}

import { ComponentProps } from 'react';

export interface Props extends Omit<ComponentProps<'img'>, 'src' | 'alt' | 'onClick'> {
  imageFile: File;
  alt: string;
}

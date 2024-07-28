import { ComponentProps } from 'react';

type ObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

export interface Props extends ComponentProps<'img'> {
  lazy?: boolean;
  width: number | string;
  height: number | string;
  src: string;
  alt: string;
  placeholder?: string;
  threshold?: number;
  objectFit?: ObjectFit;
}

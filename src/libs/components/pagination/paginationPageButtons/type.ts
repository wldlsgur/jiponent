import { ComponentProps } from 'react';

export interface Props extends ComponentProps<'button'> {
  maxCount: number;
  activeColor?: string;
  activeBackgroundColor?: string;
}

import { ComponentProps } from 'react';

export interface Props extends ComponentProps<'div'> {
  value: number;
  height?: string;
  railColor?: string;
  trackColor?: string;
  gradientColor?: string;
  animationDuration?: string;
  transitionDuration?: string;
}

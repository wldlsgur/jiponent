import { ComponentProps } from 'react';

export interface BoxProps extends ComponentProps<'div'> {
  width: string | number;
  height: string | number;
}

export interface CircleProps extends ComponentProps<'div'> {
  size: string | number;
}

export interface ParagraphProps extends ComponentProps<'div'> {
  line: number;
  width?: number | string;
  height?: number | string;
}

import { ComponentProps, ReactNode } from 'react';

export interface Props extends ComponentProps<'sub'> {
  children: ReactNode;
  count: number;
  limit: number;
  dot?: boolean;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: string | number;
  showZero?: boolean;
}

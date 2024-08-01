import { ComponentProps, ReactNode } from 'react';

export interface Props extends ComponentProps<'p'> {
  visible: boolean;
  color?: string;
  children: ReactNode;
}

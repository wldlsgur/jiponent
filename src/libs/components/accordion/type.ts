import { ComponentProps, ReactNode } from 'react';

export interface Props extends ComponentProps<'div'> {
  defaultVisible?: boolean;
  children: ReactNode;
  header: ReactNode;
  duration?: number;
}

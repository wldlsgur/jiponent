import { ComponentProps, ReactNode } from 'react';

export interface Props extends ComponentProps<'nav'> {
  children: ReactNode;
  separator: ReactNode;
}

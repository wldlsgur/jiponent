import { ComponentProps, ReactNode } from 'react';

export interface Props extends ComponentProps<'div'> {
  children: ReactNode;
}

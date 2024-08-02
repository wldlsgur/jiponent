import { ComponentProps, ReactNode } from 'react';

export interface Props extends ComponentProps<'button'> {
  children: ReactNode;
}

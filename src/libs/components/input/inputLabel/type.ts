import { ComponentProps, ReactNode } from 'react';

export interface Props extends ComponentProps<'label'> {
  color?: string;
  children: ReactNode;
}

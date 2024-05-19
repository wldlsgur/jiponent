import { ComponentProps, ReactNode } from 'react';

export interface Props extends ComponentProps<'label'> {
  children: ReactNode;
  visible?: boolean;
  multiple?: boolean;
}

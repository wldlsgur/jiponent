import { ComponentProps, ReactNode } from 'react';

export interface Props extends Omit<ComponentProps<'li'>, 'value' | 'onClick'> {
  value: ReactNode;
  onClick?: (value: ReactNode) => void;
}

import { ComponentProps, ReactNode } from 'react';

export interface Props extends Omit<ComponentProps<'div'>, 'onChange'> {
  defaultValue: string;
  onChange: (newValue: string) => void;
  children: ReactNode;
}

import { HTMLAttributes, ReactNode } from 'react';

export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  defaultValue: string;
  onChange: (newValue: string) => void;
  children: ReactNode;
}

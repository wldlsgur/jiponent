import { HTMLAttributes, ReactNode } from 'react';

export interface Props<T> extends Omit<HTMLAttributes<HTMLUListElement>, 'children'> {
  data: T[];
  children: (data: T, index: number) => ReactNode;
}

import { ComponentProps, ReactNode } from 'react';

export interface Props<T> extends Omit<ComponentProps<'ul'>, 'children'> {
  data: T[];
  children: (data: T, index: number) => ReactNode;
}

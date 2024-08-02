import { ComponentProps, ReactNode } from 'react';

export interface Props extends ComponentProps<'div'> {
  defaultPage: number;
  limit: number;
  total: number;
  onPageChange: (newPage: number) => void;
  children: ReactNode;
}

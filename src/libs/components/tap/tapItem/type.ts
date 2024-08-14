import { ComponentProps, ReactNode, CSSProperties } from 'react';

export interface Props extends Omit<ComponentProps<'button'>, 'title' | 'content'> {
  title: ReactNode;
  index: number;
  active?: boolean;
  content: ReactNode;
  length?: number;
  activeStyle?: CSSProperties;
}

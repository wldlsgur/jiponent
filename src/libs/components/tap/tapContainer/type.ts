import { ComponentProps, ReactNode, CSSProperties } from 'react';

export interface Props extends ComponentProps<'div'> {
  children: ReactNode;
  defaultIndex?: number;
  activeStyle?: CSSProperties;
  itemAttribute?: ComponentProps<'button'>;
}

import { ComponentProps } from 'react';

export type TDivider = 'horizontal' | 'vertical';

export interface DividerProps extends ComponentProps<'hr'> {
  direction?: TDivider;
}

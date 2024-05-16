import { HTMLAttributes } from 'react';

export type TDivider = 'horizontal' | 'vertical';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  direction?: TDivider;
}

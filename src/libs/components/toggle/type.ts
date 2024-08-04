import { ComponentProps } from 'react';

export interface Props extends ComponentProps<'div'> {
  initialState?: boolean;
  onToggle?: (state: boolean) => void;
  disabled?: boolean;
  inActiveColor?: string;
  activeColor?: string;
}

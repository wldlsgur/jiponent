import { ComponentProps, ReactNode } from 'react';

export interface Props extends ComponentProps<'div'> {
  visible: boolean;
  backgroundColor?: string;
  zIndex?: number;
  children: ReactNode;
  onClose: () => void;
}

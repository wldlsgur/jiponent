import { ComponentProps, ReactNode } from 'react';

export interface Props extends ComponentProps<'div'> {
  visible: boolean;
  children: ReactNode;
  onClose?: () => void;
}

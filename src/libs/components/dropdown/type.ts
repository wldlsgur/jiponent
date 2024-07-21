import { ComponentProps, ReactNode } from 'react';

export interface Props {
  defaultValue?: ReactNode;
  list: ReactNode[];
  onChange: (newValue: ReactNode) => void;
  ulAttribute?: ComponentProps<'ul'>;
  liAttribute?: Omit<ComponentProps<'li'>, 'onClick'>;
}

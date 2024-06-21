import { ComponentProps } from 'react';

export interface Props {
  list: string[];
  listRest?: ComponentProps<'ul'>;
  itemRest?: Omit<ComponentProps<'li'>, 'onClick'>;
}

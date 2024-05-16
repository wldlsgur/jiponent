import { HTMLAttributes } from 'react';

export interface Props {
  list: string[];
  listRest?: HTMLAttributes<HTMLUListElement>;
  itemRest?: Omit<HTMLAttributes<HTMLLIElement>, 'onClick'>;
}

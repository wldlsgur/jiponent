import { ComponentProps } from 'react';
import { ImageSelectContextProviderProps } from '../context/imageSelectContext/type';

export interface Props
  extends ImageSelectContextProviderProps,
    Omit<ComponentProps<'div'>, 'children' | 'onChange'> {}

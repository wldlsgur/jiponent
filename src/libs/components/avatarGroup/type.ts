import { ComponentProps } from 'react';
import { Props as AvatarProps } from '../avatar/type';

export interface Props extends ComponentProps<'div'> {
  margin?: number;
  size?: number;
  list: AvatarProps[];
}

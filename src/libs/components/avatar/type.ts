import { ComponentProps } from 'react';
import { Props as ImageProps } from '../image/type';

export interface Props extends Omit<ImageProps, 'width' | 'height'> {
  size?: number;
  radius?: number | string;
  containerAttribute?: ComponentProps<'div'>;
}

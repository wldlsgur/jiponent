import { ComponentProps } from 'react';

export type InputHandle = {
  clear: () => void;
  focus: () => void;
  scrollIntoView: () => void;
};

export type InputType = 'text' | 'email' | 'number' | 'password' | 'tel' | 'date' | 'time';

export interface Props extends ComponentProps<'input'> {
  type?: InputType;
  invalid?: boolean;
  borderColor?: string;
}

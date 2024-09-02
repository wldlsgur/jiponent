import { ForwardedRef, forwardRef } from 'react';
import * as S from './style.module.css';
import { Props } from './type';
import combineClassName from '@/libs/utils/combineClassName';

const InputText = forwardRef(
  (
    { type = 'text', invalid = false, borderColor = 'gray', className, style, ...rest }: Props,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        style={{ ...style, borderColor: invalid ? 'red' : borderColor }}
        className={combineClassName(S.default.input, className)}
        {...rest}
      />
    );
  },
);

export default InputText;

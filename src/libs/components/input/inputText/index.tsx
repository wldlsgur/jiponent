import { ForwardedRef, forwardRef } from 'react';
import * as S from './style.module.css';
import { Props } from './type';
import combineClassName from '@/libs/utils/combineClassName';

const InputText = forwardRef(
  (
    { type = 'text', invalid = false, className, style, ...rest }: Props,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        style={{ borderColor: invalid ? 'red' : 'gray', ...style }}
        className={combineClassName(S.default.input, className)}
        {...rest}
      />
    );
  },
);

export default InputText;

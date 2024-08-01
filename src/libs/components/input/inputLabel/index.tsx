import * as S from './style.module.css';
import { Props } from './type';
import combineClassName from '@/libs/utils/combineClassName';

const InputLabel = ({ color = '#888888', children, className, style, ...rest }: Props) => {
  return (
    <label
      className={combineClassName(S.default.label, className)}
      style={{ ...style, color }}
      {...rest}
    >
      {children}
    </label>
  );
};

export default InputLabel;

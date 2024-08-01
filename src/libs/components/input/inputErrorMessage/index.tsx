import * as S from './style.module.css';
import { Props } from './type';
import combineClassName from '@/libs/utils/combineClassName';

const InputErrorMessage = ({
  visible,
  color = '#ED4044',
  children,
  className,
  style,
  ...rest
}: Props) => {
  return (
    <p
      className={combineClassName(S.default.error, className)}
      style={{ ...style, color, display: visible ? 'block' : 'none' }}
      {...rest}
    >
      {children}
    </p>
  );
};

export default InputErrorMessage;

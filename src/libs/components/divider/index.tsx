import * as S from './style.module.css';
import { DividerProps } from './type';
import combineClassName from '@/libs/utils/combineClassName';

const Divider = ({ direction = 'horizontal', className, ...rest }: DividerProps) => {
  const dividerClass = direction === 'horizontal' ? S.default.horizontal : S.default.vertical;

  return (
    <hr
      className={combineClassName(dividerClass, className)}
      {...rest}
    />
  );
};

export default Divider;

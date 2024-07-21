import * as S from './style.module.css';
import { Props } from './type';
import combineClassName from '@/libs/utils/combineClassName';

const DropdownItem = ({ value, onClick, className, ...rest }: Props) => {
  return (
    <li
      className={combineClassName(S.default.item, className)}
      {...rest}
    >
      <button
        type='button'
        className={S.default.button}
        onClick={() => onClick && onClick(value)}
      >
        {value}
      </button>
    </li>
  );
};

export default DropdownItem;

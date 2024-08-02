import { usePagination } from '../context';
import * as S from './style.module.css';
import { Props } from './type';
import combineClassName from '@/libs/utils/combineClassName';

const PrevButton = ({ children, className, ...rest }: Props) => {
  const { handleMovePrevPage } = usePagination();

  return (
    <button
      type='button'
      className={combineClassName(S.default.button, className)}
      onClick={handleMovePrevPage}
      {...rest}
    >
      {children}
    </button>
  );
};

export default PrevButton;

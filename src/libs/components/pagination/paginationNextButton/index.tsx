import { usePagination } from '../context';
import * as S from './style.module.css';
import { Props } from './type';
import combineClassName from '@/libs/utils/combineClassName';

const NextButton = ({ children, className, ...rest }: Props) => {
  const { handleMoveNextPage } = usePagination();

  return (
    <button
      type='button'
      className={combineClassName(S.default.button, className)}
      {...rest}
      onClick={handleMoveNextPage}
    >
      {children}
    </button>
  );
};

export default NextButton;
